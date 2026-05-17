# ecoricemon.github.io

This is my personal portfolio, deployed with GitHub Pages. It presents my
perspective as a system software engineer focused on reliability and
scalability, shaped by hands-on experience in defense software development and
software reliability verification.

The portfolio is organized around Rust, data-oriented design, and a long-term
direction toward a unified CPU/GPU execution framework. It also introduces
selected personal projects and the problem-solving approach behind them.

## Live Site

[https://ecoricemon.github.io](https://ecoricemon.github.io)

## Highlights

- System software engineering portfolio
- Narrative focused on reliability, scalability, and data-oriented design
- Project showcases for `my-ecs`, `syn-sem`, `logic-eval`, `my-wgsl`, and `auto-kube`

## Getting Started

```bash
npm install
npm run dev
```

The development server runs with Vite, allowing content and UI changes to be
reviewed locally.

## Build

```bash
npm run build
```

The production build is generated in the `dist/` directory.

## Deployment

Pushing to the `main` branch triggers the `.github/workflows/deploy.yml`
workflow, which builds and deploys the site to GitHub Pages.

## Content

The main portfolio copy and project data are managed in `src/content.js`. Layout
and interactions are implemented in `src/App.jsx`, while global styles and theme
colors are defined in `src/index.css`.

## Open Source Credits

This list includes projects that are directly referenced by the application
source, build configuration, or styling:

- [React](https://react.dev/) - UI framework, MIT license
- [React DOM](https://react.dev/reference/react-dom) - Browser rendering for React, MIT license
- [Vite](https://vite.dev/) - Development server and production build, MIT license
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react) - React support for Vite, MIT license
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first styling, MIT license
- [PostCSS](https://postcss.org/) - CSS processing, MIT license
- [Autoprefixer](https://github.com/postcss/autoprefixer) - Vendor prefix handling, MIT license
- [Framer Motion](https://www.framer.com/motion/) - Animation and motion effects, MIT license
- [Lucide React](https://lucide.dev/) - Icon set, ISC license
- [JetBrains Mono](https://www.jetbrains.com/lp/mono/) - Monospace typeface, SIL Open Font License 1.1
- [Rosé Pine](https://rosepinetheme.com/) - Color palette inspiration, MIT license
