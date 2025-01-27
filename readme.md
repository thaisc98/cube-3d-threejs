# 3D Cube Viewer with ThreeJS

This project is a simple website that displays a rotating 3D cube using [Three.js](https://threejs.org/). It serves as a reference for exploring Three.js documentation and understanding the basics of 3D rendering in web applications.

<img width="673" alt="Screenshot 2025-01-27 at 6 20 03 PM" src="https://github.com/user-attachments/assets/8f132b6f-52c1-4745-ac2c-f3f03a964e46" />

## Features

- Renders a 3D cube in the browser.
- Fully interactive: Rotate and zoom in/out using mouse controls.
- Powered by Three.js.
- Manipulate the metalness, roughness, aoMapIntensity and displacementScale

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 16 or later recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Getting Started

### 1. Install Dependencies

Install all required dependencies using npm:

```bash
npm install
```

### 2. Start the Development Server

Start the local development server:

```bash
npm run dev
```

## Project Structure

```plaintext
├── src                             # Source files
│   ├── index.html                  # HTML entry point
│   ├── styles.css                  # Styling
│   ├── script.js                   # JavaScript entry point (Three.js code)
├── static/textures                 # Static Textures files
│   ├── carbon-fiber-bl             # Textures Carbon fiber from Freepbr
│   ├── metal-shipping-container-bl # Textures Metal container from Freepbr
│   ├── space-cruiser-panels2-bl    # Textures Space Cruiser from Freepbr
│   ├── whispy-grass-meadow-bl      # Textures Whispy Grass from Freepbr
├── package.json                    # npm configuration
├── readme.md                       # Project documentation
├── vite.config.js                  # Vite configuration
```

## Deployment

To deploy this project to production, build the optimized files:

```bash
npm run build
```

Then, serve the contents of the `dist` folder using any static site hosting service (e.g., Netlify, Vercel, or GitHub Pages).

## Resources

- [Three.js Documentation](https://threejs.org/docs/)
- [Three.js Examples](https://threejs.org/examples/)
- [Freepbr](https://freepbr.com/)

## License

This project is licensed under the MIT License. Feel free to use and modify the code as needed.
