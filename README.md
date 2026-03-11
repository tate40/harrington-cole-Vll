# Harrington & Cole Legal Group

A professional, single-page law firm website built with Vite + React + Tailwind CSS, served by an Express static file server.

## Project Structure

```
harrington-cole/
├── client/               # Vite + React frontend
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
├── server/
│   └── index.js          # Express server (serves dist/public)
├── dist/
│   └── public/           # Built frontend output
├── package.json
├── nixpacks.toml         # Railway build configuration
└── README.md
```

## Local Development

```bash
# Install root dependencies
npm install

# Install client dependencies
cd client && npm install && cd ..

# Build the frontend
npm run build

# Start the server
npm start
```

The site will be available at `http://localhost:3000`.

## Deployment on Railway

1. Push this repository to GitHub.
2. Create a new Railway project and connect the repository.
3. Railway will automatically detect `nixpacks.toml` and run the build.
4. The `PORT` environment variable is automatically injected by Railway.

No additional environment variables or configuration are required.

## Tech Stack

- **Frontend:** React 18, Vite 5, Tailwind CSS 3
- **Server:** Express 4 (static file serving)
- **Deployment:** Railway (via Nixpacks)
