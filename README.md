# Christina & Peter's Wedding Website

A fun and playful "coming soon" landing page for Christina & Peter's Fall 2026 wedding, featuring mouse-responsive confetti animations and beautiful gradient backgrounds.

## ✨ Features

- **Interactive Confetti**: Mouse and touch-responsive confetti particles with varied shapes and colors
- **Beautiful Typography**: Google Fonts integration with Dancing Script and Playfair Display
- **Gradient Backgrounds**: Animated peach/pink gradient that shifts smoothly
- **Fully Responsive**: Mobile-first design that works on all screen sizes
- **Accessibility**: Respects `prefers-reduced-motion` settings
- **Performance Optimized**: Static site generation with Next.js
- **PWA Ready**: Includes manifest for progressive web app features

## 🚀 Getting Started

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the site.

### Building for Production

```bash
# Build and export static site
npm run build

# Serve the built site locally for testing
npm run serve
```

The static site will be generated in the `out/` directory, ready for deployment to any static hosting service.

## 🎨 Design

- **Color Palette**: Peach, pink, and purple gradients inspired by fun, playful wedding themes
- **Typography**: 
  - Names: Dancing Script (script font)
  - Date & Message: Playfair Display (serif font)
- **Animation**: Canvas-based confetti system with:
  - Multiple particle shapes (squares, circles, triangles)
  - Physics simulation (gravity, rotation)
  - Mouse/touch interaction
  - Performance optimization

## 📱 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers

## 🚢 Deployment

This is a static Next.js site that can be deployed to any static hosting service:

### GitHub Pages

#### Automatic Deployment (Recommended)
The repository includes a GitHub Actions workflow (`.github/workflows/nextjs.yml`) that automatically:
1. Builds the site using the custom domain configuration
2. Deploys to GitHub Pages on every push to `main` branch
3. Supports manual deployment via GitHub Actions tab

#### Manual Deployment
For manual deployment, use the appropriate build command:

```bash
# For custom domain (like peterandchristina.wedding)
npm run build:custom-domain

# For GitHub Pages subdomain (username.github.io/repository-name)
npm run build:github

# Standard build (for other hosting services)
npm run build
```

Then deploy the `out/` directory to your hosting service.

### Other Hosting Services
- **Vercel**: `vercel --prod` (automatic deployment)
- **Netlify**: Upload the `out/` directory or connect via Git
- **Any CDN/Static Host**: Upload the `out/` directory contents

## 📁 Project Structure

```
├── components/
│   └── ConfettiCanvas.tsx    # Interactive confetti animation
├── pages/
│   ├── _app.tsx              # Next.js app component
│   └── index.tsx             # Main landing page
├── styles/
│   └── globals.css           # Global styles and design system
├── public/
│   ├── manifest.json         # PWA manifest
│   └── ...                   # Static assets
└── README.md
```

## 🎯 Future Enhancements

The site is structured to easily add new features as wedding planning progresses:

- RSVP form
- Wedding details and timeline
- Photo gallery
- Gift registry integration
- Wedding party information
- Travel and accommodation details

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with TypeScript
- **Styling**: CSS with custom properties (CSS variables)
- **Animation**: HTML5 Canvas with vanilla JavaScript
- **Fonts**: Google Fonts (Dancing Script, Playfair Display)
- **Deployment**: Static export for universal hosting compatibility