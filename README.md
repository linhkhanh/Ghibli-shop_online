# Ghibli Shop Online

Welcome to **Ghibli Shop Online**! This is a modern e-commerce web application inspired by Studio Ghibli, built with:

- **React** (with TypeScript)
- **React Hook Form** for form management and validation
- **React Hooks** for state and effect management
- **React Router** for client-side routing

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

- **React** + **TypeScript**
- **React Hook Form**
- **React Router**
- **Material UI** (MUI) for UI components

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

Update the value to match your backend URL as needed. 3. Start Laravel Sail (runs Docker containers):

```bash
./vendor/bin/sail up -d
```

Or, if you haven't installed Sail yet:

```bash
composer install
php artisan sail:install
./vendor/bin/sail up -d
```

4. Run migrations and seeders:
   ```bash
   ./vendor/bin/sail artisan migrate --seed
   ```
5. The backend API will be available at `http://localhost` (or the port specified in your `.env`).

For more info, see the backend [README](ghibli-backend/README.md) and the [Laravel Sail documentation](https://laravel.com/docs/sail).

---

Enjoy exploring the magic of Studio Ghibli through this demo shop!

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:
