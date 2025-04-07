# Portfolio Website

A beautiful, responsive portfolio website built with React, TypeScript, and Bootstrap, featuring an onyx color palette.

## Features

- Modern, responsive design
- Onyx color palette
- Smooth scrolling navigation
- Project showcase section
- Contact form
- Social media links
- Skills display
- Mobile-friendly layout

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Deployment to GitHub Pages

1. Install gh-pages package:
```bash
npm install gh-pages --save-dev
```

2. Add the following scripts to your `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. Add the homepage field to your `package.json`:
```json
"homepage": "https://yourusername.github.io/portfolio"
```

4. Deploy to GitHub Pages:
```bash
npm run deploy
```

## Customization

1. Update your personal information in `src/App.tsx`
2. Add your projects to the projects section
3. Update social media links
4. Modify the color scheme in `src/App.css`

## Technologies Used

- React
- TypeScript
- Bootstrap
- React Bootstrap
- Font Awesome
- GitHub Pages

## License

This project is licensed under the MIT License.
