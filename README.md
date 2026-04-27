# MariaAI2

## Base URL configuration for deployments

The Vite `base` path is controlled by the `VITE_BASE_URL` environment variable at build time (defaults to `/`).

- **Custom domain** (e.g. `https://mariaai.me/`): set `VITE_BASE_URL=/` — this is the default and what the GitHub Actions workflow uses.
- **GitHub Pages subpath** (e.g. `https://viniguivinigui.github.io/MariaAI2/`): set `VITE_BASE_URL=/MariaAI2/` when running the build.

The workflow (`.github/workflows/static.yml`) passes `VITE_BASE_URL=/` explicitly so the site works correctly on the custom domain.
