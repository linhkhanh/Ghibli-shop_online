-- trigger price/discount update --> insert changes into price_logs table

CREATE TRIGGER tr_AfterProductPriceUpdate
AFTER UPDATE ON products
FOR EACH ROW
BEGIN
    -- Only log if the price or discount actually changed
    IF OLD.price <> NEW.price OR OLD.discount <> NEW.discount THEN
        INSERT INTO price_logs (
            product_id, 
            old_price, 
            new_price, 
            old_discount, 
            new_discount, 
            changed_by, 
            created_at
        )
        VALUES (
            OLD.id, 
            OLD.price, 
            NEW.price, 
            OLD.discount, 
            NEW.discount, 
            @current_user_id,
            NOW()
        );
    END IF;
END

-- trigger product info update ---> insert data to audit_logs table

CREATE TRIGGER audit_products_update
AFTER UPDATE ON products
FOR EACH ROW
BEGIN
    INSERT INTO audit_logs (
        user_id, 
        action, 
        table_name, 
        record_id, 
        old_values, 
        new_values, 
        created_at, 
        updated_at
    ) 
    VALUES (
        @current_user_id,        
        'updated', 
        'products',             
        OLD.id, 
        JSON_OBJECT('price', OLD.price, 'title', OLD.title, 'discount', OLD.discount, 'description', OLD.description, 'stock', OLD.stock, 'movie_id', OLD.movie_id),
        JSON_OBJECT('price', NEW.price, 'title', NEW.title, 'discount', NEW.discount, 'description', NEW.description, 'stock', NEW.stock, 'movie_id', NEW.movie_id),
        NOW(), 
        NOW()
    );
END


-- trigger order update --> insert data to audit_logs table
CREATE TRIGGER audit_orders_update
AFTER UPDATE ON orders
FOR EACH ROW
BEGIN
    IF (OLD.status <> NEW.status) THEN
        INSERT INTO audit_logs (
            user_id, 
            action, 
            table_name, 
            record_id, 
            old_values, 
            new_values, 
            created_at, 
            updated_at
        ) 
        VALUES (
            @current_user_id, 
            'updated', 
            'orders', 
            OLD.id, 
            JSON_OBJECT(
                'status', OLD.status,
                'payment_status', OLD.payment_status
            ),
            JSON_OBJECT(
                'status', NEW.status,
                'payment_status', NEW.payment_status
            ), 
            NOW(), 
            NOW()
        );
    END IF;
END


-- trigger addmit delete product --> insert data to audit_logs table
-- use soft_delete for future feature: restore deleted products

CREATE TRIGGER audit_products_soft_delete
AFTER UPDATE ON products
FOR EACH ROW
BEGIN
    IF OLD.deleted_at IS NULL AND NEW.deleted_at IS NOT NULL THEN
        INSERT INTO audit_logs (
            user_id, 
            action, 
            table_name, 
            record_id, 
            old_values, 
            new_values, 
            created_at, 
            updated_at
        ) 
        VALUES (
            @current_user_id, 
            'soft_deleted', 
            'products', 
            NEW.id, 
            JSON_OBJECT('name', OLD.title, 'deleted_at', OLD.deleted_at), 
            JSON_OBJECT('name', NEW.title, 'deleted_at', NEW.deleted_at), 
            NOW(), 
            NOW()
        );
    END IF;
END


-- ------------------------- Procedure --------------------------------------

-- Update product stock after placing order

CREATE PROCEDURE sp_DecrementProductStockAfterOrder(
    IN p_product_id INT,
    IN p_quantity INT
)
BEGIN
    DECLARE v_current_stock INT;

    SELECT stock INTO v_current_stock 
    FROM products 
    WHERE id = p_product_id;

    IF v_current_stock < p_quantity THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Insufficient stock levels for this operation.';
    ELSE
        UPDATE products 
        SET stock = stock - p_quantity,
            updated_at = NOW()
        WHERE id = p_product_id;
    END IF;
END
-- ------------------------------------------------------------



-- Create order item when placing order

CREATE PROCEDURE sp_ProcessOrderItems (
    IN p_order_id INT,
    IN p_cart_id INT
)
BEGIN
    DECLARE v_product_id INT;
    DECLARE v_quantity INT;
    DECLARE v_stock INT;
    DECLARE v_price DECIMAL(10,2);
    DECLARE v_discount DECIMAL(5,2);
    DECLARE v_product_name VARCHAR(255);
    DECLARE v_done INT DEFAULT 0;

    DECLARE cart_cursor CURSOR FOR 
        SELECT ci.product_id, ci.quantity, p.stock, p.price, p.discount, p.title
        FROM cart_items ci
        JOIN products p ON ci.product_id = p.id
        WHERE ci.cart_id = p_cart_id;

    DECLARE CONTINUE HANDLER FOR NOT FOUND SET v_done = 1;
    
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        RESIGNAL;
    END;

    START TRANSACTION;
        OPEN cart_cursor;
        read_loop: LOOP
            FETCH cart_cursor INTO v_product_id, v_quantity, v_stock, v_price, v_discount, v_product_name;
            
            IF v_done THEN
                LEAVE read_loop;
            END IF;

           	CALL sp_DecrementProductStockAfterOrder(v_product_id, v_quantity);
 
            INSERT INTO order_items (order_id, product_id, quantity, price, created_at, updated_at)
            VALUES (
                p_order_id, 
                v_product_id, 
                v_quantity, 
                v_price * (1 - v_discount / 100), 
                NOW(), 
                NOW()
            );
        END LOOP;

        CLOSE cart_cursor;
    COMMIT;
END
-- --------------------------------------------------------------


-- Calculate total amount from cart_items
CREATE PROCEDURE sp_GetCartTotal(
    IN p_cart_id INT,
    OUT p_total_amount DECIMAL(10,2)
)
BEGIN
    SELECT SUM(ci.quantity * p.price * (1 - p.discount / 100))
    INTO p_total_amount
    FROM cart_items ci
    JOIN products p ON ci.product_id = p.id
    WHERE ci.cart_id = p_cart_id;

    IF p_total_amount IS NULL THEN
        SET p_total_amount = 0.00;
    END IF;
END
-- -----------------------------------------------------------------------------------------------


-- Procedure: place order, insert data to orders table and order_items table
CREATE PROCEDURE sp_PlaceOrder (
    IN p_user_id BIGINT,
    IN p_name VARCHAR(255),
    IN p_email VARCHAR(255),
    IN p_phone VARCHAR(20),
    IN p_address VARCHAR(255),
    IN p_cart_id BIGINT,
    OUT p_new_order_id BIGINT
)
BEGIN
	DECLARE v_calculated_total DECIMAL(10,2);
    DECLARE v_new_order_id BIGINT;
	DECLARE v_delivery_fee DECIMAL(8,2);

    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK; -- Rollback if any error occurs
    END;

    START TRANSACTION;
    	-- 1. Calculate total_amount
    	CALL sp_GetCartTotal(p_cart_id, v_calculated_total);
    
    	IF v_calculated_total < 50 THEN
        SET v_delivery_fee = 20;
	    ELSE
	        SET v_delivery_fee = 0;
	    END IF;
    
        -- 2. Create the order record
        INSERT INTO orders (
			user_id,
			name, 
			email, 
			phone_number, 
			shipping_address, 
			total_amount, 
			delivery_fee,
			status, 
			payment_method, 
			payment_status,
			created_at,
			updated_at
		)
        VALUES (
        	p_user_id, 
        	p_name, 
        	p_email, 
        	p_phone, 
        	p_address, 
        	v_calculated_total,
        	v_delivery_fee,
        	'pending', 
        	'cash',
        	'unpaid',
        	NOW(), 
        	NOW()
        );
        SET v_new_order_id = LAST_INSERT_ID();

        -- 3. Create order items
        CALL sp_ProcessOrderItems(v_new_order_id, p_cart_id);

        -- 4. Clear the user's cart or guest cart after placing the order
        DELETE FROM carts WHERE id = p_cart_id;

    	-- 5. Update User Profile if user_id is provided (equivalent to if($user))
	    IF p_user_id IS NOT NULL THEN
	        UPDATE users 
	        SET phone = p_phone, 
	            address = p_address,
	            updated_at = NOW()
	        WHERE id = p_user_id;
	    END IF;
    
        SET p_new_order_id = v_new_order_id;
    COMMIT;
END
