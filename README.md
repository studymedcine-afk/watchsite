# Watchsite

A Next.js application deployed on GitHub Pages.

## Features

- Built with **Next.js 16+** and **React 19+**
- Styled with **Tailwind CSS**
- **Static site generation** for GitHub Pages
- **Automatic deployment** via GitHub Actions

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Building

```bash
npm run build
```

This creates an optimized production build in the `out` directory.

## Deployment

The project is configured to deploy to GitHub Pages automatically:

1. **GitHub Actions** is configured in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
2. Every push to the `main` branch triggers an automatic build and deployment
3. The site is available at: https://studymedcine-afk.github.io/watchsite

### Manual Deployment

To deploy manually:

```bash
npm run deploy
```

Or just push to main:

```bash
git push origin main
```

## Configuration

### Site Configuration

- **Base Path**: `/watchsite` (configured in `next.config.js`)
- **Output**: Static export for GitHub Pages
- **Images**: Unoptimized for static hosting

### GitHub Pages Setup

To enable GitHub Pages for this repository:

1. Go to **Settings** → **Pages**
2. Select **Deploy from a branch**
3. Choose **gh-pages** branch (created by GitHub Actions)
4. Save

## Project Structure

```
watchsite/
├── app/               # Next.js App Router
│   ├── layout.tsx     # Root layout
│   ├── page.tsx       # Home page
│   └── globals.css    # Global styles
├── public/            # Static assets
├── .github/
│   └── workflows/
│       └── deploy.yml # GitHub Actions workflow
├── next.config.js     # Next.js configuration
└── package.json       # Dependencies
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Deploying Next.js to GitHub Pages](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

## License

ISC
