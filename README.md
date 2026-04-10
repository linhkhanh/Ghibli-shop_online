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
- User authentication (login/register with validation)
- Responsive design and beautiful UI

## Tech Stack

- **React** + **TypeScript**
- **React Hook Form**
- **React Router**
- **Material UI** (MUI) for UI components

## Getting Started

1. Clone the repository
2. Install dependencies with `npm install`
3. Start the development server with `npm run dev`

---

Enjoy exploring the magic of Studio Ghibli through this demo shop!
},
// other options...
},
},
]);

````

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
````
