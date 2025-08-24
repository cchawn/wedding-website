# Christina & Peter's Wedding Website

A wedding website for Christina & Peter's Fall 2026 wedding.

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the site.

## Building for Production

```bash
# Build and export static site
npm run build

# Serve the built site locally for testing
npm run serve
```

## Deployment

This site is automatically deployed to GitHub Pages via GitHub Actions on every push to the `main` branch. The workflow builds the site using the custom domain configuration and deploys to GitHub Pages.

For manual deployment:

```bash
# For custom domain
npm run build:custom-domain

# For GitHub Pages subdomain
npm run build:github
```

Then deploy the `out/` directory contents.