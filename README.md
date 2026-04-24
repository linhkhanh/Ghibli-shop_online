# Ghibli Shop Online

Welcome to **Ghibli Shop Online**! This is a modern e-commerce web application inspired by Studio Ghibli, built with:

## Features

- Browse a large collection of Ghibli-inspired products
- Search, filter, and paginate product lists
- Add products to cart and checkout
- View orders list and order detail
- Admin create, update, delete product
- Admin update order status
- User authentication (login/register with validation)
- Responsive design and beautiful UI

## Tech Stack

### Frontend

- **React** (with TypeScript)
- **React Hook Form** for form management and validation
- **React Hooks** for state and effect management
- **React Router** for client-side routing

### Backend

- **Laravel** (PHP framework)
- **Laravel Sail** (official Docker-based local dev environment)
- **MySQL** (database)
- **Docker** (containerization)

## Getting Started

### Frontend

1. Clone the repository
2. Navigate to the frontend folder:
   ```bash
   cd FE
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

### Backend

1. Navigate to the backend folder:
   ```bash
   cd ghibli-backend
   ```
2. Copy the example environment file and set your environment variables:

   ```bash
   cp .env.example .env
   ```

   Open the new `.env` file in your editor and update the following variables as needed:
   - `DB_DATABASE`, `DB_USERNAME`, `DB_PASSWORD`: Set your MySQL database name, user, and password. For Sail, defaults are usually `sail`/`password`.
   - `APP_URL`: Set to `http://localhost` or your desired local domain.
   - `MAIL_...`: Configure mail settings if you want to send emails (optional for local dev).
   - Any other variables specific to your environment or features.

   Example for Sail:

   ```env
   DB_CONNECTION=mysql
   DB_HOST=mysql
   DB_PORT=3306
   DB_DATABASE=sail
   DB_USERNAME=sail
   DB_PASSWORD=password
   APP_URL=http://localhost
   ```

   > **Tip:** After editing `.env`, you may need to restart Sail for changes to take effect.

#### Frontend Environment Variables

If your frontend (React) needs to connect to the backend API, you can create a `.env` file in the `FE` folder:

```env
VITE_API_URL=http://localhost/api
```

Update the value to match your backend URL as needed.

3. Start Laravel Sail (runs Docker containers):

```bash
./vendor/bin/sail up -d
```

Or, if you haven't installed Sail yet:

```bash
composer install
php artisan sail:install
./vendor/bin/sail up -d
```

4. Run migrations and all seeders:

   ```bash
   ./vendor/bin/sail artisan migrate --seed
   ```

   To run a specific seeder file (e.g., `MoviesTableSeeder`, `ProductsTableSeeder`):

   ```bash
   ./vendor/bin/sail artisan db:seed --class=MoviesTableSeeder
   ```

   ```bash
   ./vendor/bin/sail artisan db:seed --class=ProductsTableSeeder
   ```

5. The backend API will be available at `http://localhost` (or the port specified in your `.env`).

For more info, see the backend [README](ghibli-backend/README.md) and the [Laravel Sail documentation](https://laravel.com/docs/sail).

---

Enjoy exploring the magic of Studio Ghibli through this demo shop!

## Data Structure

Below are the main data structures used in this project, including database tables and key entity schemas.

### Database Tables (MySQL)

<img width="356" height="440" alt="Screenshot 2026-04-24 at 11 48 34" src="https://github.com/user-attachments/assets/87f17a11-8f49-4693-a828-de8375d8dc34" />

#### products

| Field       | Type      | Description          |
| ----------- | --------- | -------------------- |
| id          | BIGINT    | Primary key          |
| title       | VARCHAR   | Product name         |
| description | TEXT      | Product description  |
| price       | DECIMAL   | Price                |
| discount    | DECIMAL   | Discount (if any)    |
| movie       | VARCHAR   | Related Ghibli movie |
| stock       | INT       | Product stock        |
| created_at  | TIMESTAMP | Creation timestamp   |
| updated_at  | TIMESTAMP | Update timestamp     |

#### orders

| Field        | Type      | Description              |
| ------------ | --------- | ------------------------ |
| id           | BIGINT    | Primary key              |
| user_id      | BIGINT    | Reference to users table |
| total_amount | DECIMAL   | Total order amount       |
| status       | VARCHAR   | Order status             |
| address      | VARCHAR   | Shipping address         |
| name         | VARCHAR   | User name                |
| email        | VARCHAR   | User email               |
| phone        | VARCHAR   | User phone number        |
| created_at   | TIMESTAMP | Creation timestamp       |
| updated_at   | TIMESTAMP | Update timestamp         |

#### order_items

| Field      | Type    | Description               |
| ---------- | ------- | ------------------------- |
| id         | BIGINT  | Primary key               |
| order_id   | BIGINT  | Reference to orders table |
| product_id | BIGINT  | Reference to products     |
| quantity   | INT     | Quantity ordered          |
| price      | DECIMAL | Price at order time       |

#### users

| Field      | Type      | Description        |
| ---------- | --------- | ------------------ |
| id         | BIGINT    | Primary key        |
| name       | VARCHAR   | User's name        |
| email      | VARCHAR   | User's email       |
| password   | VARCHAR   | Hashed password    |
| address    | VARCHAR   | User's address     |
| phone      | VARCHAR   | User's phone       |
| created_at | TIMESTAMP | Creation timestamp |
| updated_at | TIMESTAMP | Update timestamp   |

### Product Schema (Example)

```json
{
  "id": 1,
  "name": "Totoro Plush",
  "description": "Soft and cuddly Totoro plush toy.",
  "price": 29.99,
  "discount": 5.0,
  "image_url": "https://...",
  "movie": "My Neighbor Totoro"
}
```

### Order Schema (Example)

```json
{
  "id": 101,
  "user_id": 1,
  "total": 54.98,
  "status": "pending",
  "address": "123 Ghibli Lane, Tokyo",
  "items": [
    {
      "product_id": 1,
      "name": "Totoro Plush",
      "quantity": 2,
      "price": 24.99
    }
  ],
  "created_at": "2026-04-24T10:00:00Z"
}
```
## Pages
### Landing Page
<img width="1418" height="663" alt="Screenshot 2026-04-24 at 12 18 07" src="https://github.com/user-attachments/assets/f237e2cc-650a-419e-a638-59f482345fe4" />

### Products List
<img width="1402" height="664" alt="Screenshot 2026-04-24 at 12 19 29" src="https://github.com/user-attachments/assets/0e53bde0-8562-43ee-b825-374edea4c34d" />

### Product Detail
<img width="1394" height="620" alt="Screenshot 2026-04-24 at 12 20 16" src="https://github.com/user-attachments/assets/45bd83c2-78dd-4a74-84e1-b116d90878d3" />

### Orders List
<img width="1419" height="653" alt="Screenshot 2026-04-24 at 12 21 00" src="https://github.com/user-attachments/assets/9b55bd84-8884-40ba-aed3-617dc00ca2f8" />

### Cart view
<img width="1416" height="666" alt="Screenshot 2026-04-24 at 12 21 39" src="https://github.com/user-attachments/assets/786ad1b4-93b4-4e89-80ac-da09f2dbd436" />


### Order Detail
<img width="1433" height="661" alt="Screenshot 2026-04-24 at 12 22 14" src="https://github.com/user-attachments/assets/525699db-c328-486f-a2d7-5a3481794e6e" />

