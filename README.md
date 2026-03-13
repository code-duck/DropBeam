# DropBeam - Full-stack Node.js P2P File Sharing

DropBeam is a P2P encrypted file sharing application. This project converts the original single HTML file into a proper full-stack Node.js project. It separates the static frontend from the custom PeerJS backend for flexible deployment (e.g., hosting the frontend on Vercel while running the PeerJS signaling server via a Cloudflare tunnel or elsewhere).

## Prerequisites
- Node.js installed

## Installation

1. Copy your existing `index.html` file into the root of this project (next to `package.json` and `server.js`).
2. Install the necessary dependencies:

```bash
npm install
```

## Running Locally

The `package.json` includes several scripts for your convenience:

- **Run everything locally (Development):**
  ```bash
  npm run dev
  ```
  This will start the PeerJS server on `http://localhost:9000` and the static frontend on `http://localhost:3000`.

- **Start only the PeerJS Backend:**
  ```bash
  npm run peer
  ```
  This will start the signaling server on `http://localhost:9000`.

- **Start only the Frontend:**
  ```bash
  npm run serve
  ```
  This will serve the `index.html` on `http://localhost:3000`.

- **Production Start (PeerJS Server only):**
  ```bash
  npm start
  ```
  This command is useful when running the PeerJS backend in a production environment (like Railway, Render, etc.) where the static frontend is deployed somewhere else.

## Updating the Cloudflare URL

Currently, your `index.html` uses a hardcoded Cloudflare URL (`developments-entrance-spread-belts.trycloudflare.com`). When you run a new Cloudflare tunnel (see below), you'll get a new URL.

Find the `Peer()` initialization code block in your `index.html` and update it like this:

```javascript
const peer = new Peer({
    host: 'YOUR-NEW-CLOUDFLARE-TUNNEL-URL.trycloudflare.com', // E.g., dropshare-xyz.trycloudflare.com
    port: 443,
    path: '/',
    secure: true
});
```

*Note: The `port` must be `443` and `secure` must be `true` when using Cloudflare tunnels.*

## Starting a Cloudflare Tunnel

To make your local PeerJS server accessible on the internet for the Vercel-hosted frontend to connect to, you can use a Cloudflare tunnel.

1. Install `cloudflared` on your machine.
2. In a terminal, run the following command (assuming your `npm run peer` server is running on port 9000):

```bash
cloudflared tunnel --url localhost:9000
```

3. Look at the terminal output for the temporary `.trycloudflare.com` URL provided.
4. Copy only the domain name (without `https://`) and paste it into the `host` field of your `index.html` as shown above.

## Deploying to Vercel

Vercel is great for hosting the static `index.html` file for your frontend.

1. **Option 1: Using the Vercel CLI**
   - Install Vercel CLI globally: `npm i -g vercel`
   - From the project root, run `vercel`
   - Follow the prompts to set up and deploy (Say **no** when asked if you want to override the build command, as there is none. Just use defaults).
   - Vercel will host `index.html` automatically.

2. **Option 2: Using GitHub integration**
   - Ensure your `index.html` is committed and pushed to GitHub.
   - Go to the Vercel dashboard and Import the Git repository.
   - The framework preset should be "Other" and the root directory should be where `index.html` is located.
   - Click Deploy. Vercel will serve `index.html` statically.

Anyone will then be able to open your `https://your-project.vercel.app` site and connect to your signaling server via the Cloudflare tunnel.
