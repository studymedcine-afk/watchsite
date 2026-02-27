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
3. The workflow automatically creates a `gh-pages` branch with the built site

### First Time Setup - IMPORTANT

You **MUST** configure GitHub Pages in your repository settings:

1. Go to **https://github.com/studymedcine-afk/watchsite/settings/pages**
2. Under **"Build and deployment"** section:
   - Select **Deploy from a branch**
   - Choose **gh-pages** branch from the dropdown
   - Leave folder as **/ (root)**
   - Click **Save**

### Manual Deployment

To deploy manually:

```bash
npm run deploy
```

Or just push to main (automatic):

```bash
git push origin main
```

The site will be available at: https://studymedcine-afk.github.io/watchsite

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
