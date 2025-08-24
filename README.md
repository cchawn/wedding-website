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

- **Vercel**: `vercel --prod`
- **Netlify**: Upload the `out/` directory
- **GitHub Pages**: Deploy the `out/` directory
- **Any CDN/Static Host**: Upload the `out/` directory

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