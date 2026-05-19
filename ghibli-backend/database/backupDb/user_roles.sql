--  Roles and Permission
-- create user role and grant permission
-- 2 roles: admin, marketing
-- Admin: full permission except logs, can view logs but not edit/delete
-- marketing: only select to some tables

CREATE ROLE 'admin', 'marketing';

-- "admin" 

-- Grant full access to everything EXCEPT the sensitive logs
GRANT ALL PRIVILEGES ON ghibli_backend.products TO 'admin';
GRANT ALL PRIVILEGES ON ghibli_backend.carts TO 'admin';
GRANT ALL PRIVILEGES ON ghibli_backend.cart_items TO 'admin';
GRANT ALL PRIVILEGES ON ghibli_backend.orders TO 'admin';
GRANT ALL PRIVILEGES ON ghibli_backend.order_items TO 'admin';
GRANT ALL PRIVILEGES ON ghibli_backend.users TO 'admin';
GRANT ALL PRIVILEGES ON ghibli_backend.movies TO 'admin';
GRANT ALL PRIVILEGES ON ghibli_backend.product_images TO 'admin';
GRANT ALL PRIVILEGES ON ghibli_backend.wishlists TO 'admin';
GRANT ALL PRIVILEGES ON ghibli_backend.payments TO 'admin';

-- Grant ONLY Read access (SELECT) to the logs 
-- This allows admins to see logs but not edit or delete them
GRANT SELECT ON ghibli_backend.* TO 'admin';


-- "marketing"
GRANT SELECT ON ghibli_backend.* TO 'marketing';

CREATE USER 'super_admin'@'%' IDENTIFIED BY 'strong_password_123';
CREATE USER 'marketing_service'@'%' IDENTIFIED BY 'customer_pass_456';
GRANT 'admin' TO 'super_admin'@'%';
GRANT 'marketing' TO 'marketing_service'@'%';

SET DEFAULT ROLE ALL TO 'super_admin'@'%', 'marketing_service'@'%';
