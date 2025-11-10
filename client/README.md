# Admin Dashboard Client

This package contains the front-end portion of the MERN Fullstack Admin project. It is a React application bootstrapped with Vite that delivers a responsive dashboard for administrative analytics and management.

## Features

- 🎨 Material UI theming with light/dark mode toggled through Redux state
- 🧭 Persistent layout with sidebar navigation and top bar controls
- 📈 Rich data visualizations powered by Nivo charts and Material UI DataGrid
- 🔄 API integration through RTK Query for caching and automatic refetching
- 🌍 Geography view backed by topojson data for regional insights

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Run the production build
npm run build

# Preview the production build locally
npm run preview
```

By default the development server runs on [http://localhost:5173](http://localhost:5173).

## Environment Variables

Create a `.env` file in the `client` directory to configure runtime settings. The following variables are supported:

- `VITE_REACT_APP_BASE_URL` – Base URL of the backend API that serves dashboard data

Restart the dev server after changing environment variables.

## Project Structure

```
client/
├── public/             # Static assets served as-is
├── src/
│   ├── components/     # Reusable UI components (charts, layout helpers, widgets)
│   ├── scenes/         # Route-level views such as Dashboard, Products, and Geography
│   ├── state/          # Redux store setup, RTK Query API slices, and mock data
│   ├── theme.js        # Material UI theme configuration and tokens
│   ├── App.jsx         # Application routing and providers
│   └── main.jsx        # Application entry point
└── vite.config.js      # Vite configuration
```

## Available Scripts

- `npm run dev` – Starts the Vite development server with hot module replacement
- `npm run build` – Builds the optimized production bundle
- `npm run preview` – Serves the production build locally for smoke testing
- `npm run lint` – Lints the source code using ESLint and the configured rules

## Screenshot

_A placeholder for the dashboard screenshot will be added here._

## Contributing

1. Fork the repository and create a feature branch from `main`.
2. Ensure linting passes before submitting changes.
3. Open a pull request describing the feature or fix and link related issues.

## License

This project is licensed under the MIT License. See the root repository license for details.
