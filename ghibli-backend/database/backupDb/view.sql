CREATE VIEW view_product_catalog AS
SELECT 
    p.id AS product_id, 
    p.title, 
    p.price, 
    p.stock, 
    p.discount,
    m.title AS movie_name,
    CASE 
        WHEN p.stock <= 0 THEN 'Out of Stock'
        WHEN p.stock <= 10 THEN 'Low Stock'
        ELSE 'In Stock' 
    END AS availability
FROM products p
LEFT JOIN movies m ON p.movie_id = m.id
WHERE p.deleted_at IS NULL;


CREATE VIEW view_order_summary AS
SELECT 
    o.id AS order_id,
    u.email AS customer_email,
    o.total_amount,
    o.delivery_fee,
    o.status AS order_status,
    o.payment_status,
    (SELECT COUNT(*) FROM order_items oi WHERE oi.order_id = o.id) AS total_items,
    o.created_at AS order_date
FROM orders o
JOIN users u ON o.user_id = u.id;


CREATE VIEW view_top_selling_products AS
SELECT 
    p.id AS product_id,
    p.title AS product_name,
    SUM(oi.quantity) AS total_units_sold,
    SUM(oi.quantity * oi.price) AS total_revenue,
    p.stock AS current_inventory_level
FROM products p
JOIN order_items oi ON p.id = oi.product_id
JOIN orders o ON oi.order_id = o.id
WHERE o.payment_status = 'paid' -- We only count items that were actually paid for
GROUP BY p.id, p.title, p.stock
ORDER BY total_units_sold DESC;
