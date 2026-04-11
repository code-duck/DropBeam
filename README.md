<div align="center">
  <h1>⚡ DropBeam</h1>
  <p><strong>A Modern P2P File & Folder Sharing Application</strong></p>
</div>

DropBeam is a high-performance, real-time peer-to-peer (P2P) file sharing application built with WebRTC, Node.js, and PeerJS. It features a stunning modern interface, drag-and-drop functionality, and end-to-end encryption by default for secure and instantaneous file transfers across devices.

## 🌟 Key Features

- **Peer-to-Peer Transfers:** Files are shared directly between devices using WebRTC. No transfer data is stored on any central server.
- **File & Folder Support:** Share entire directories or individual files effortlessly.
- **End-to-End Encryption:** Leveraging WebRTC's built-in DTLS/SRTP encryption, all transfers are completely secure.
- **Sleek UI/UX:** A beautiful dark-themed interface with drag & drop support, real-time progress bars, connection badges, and transfer speed indicators.
- **QR Code Sharing:** Generate instant QR codes for quick recipient link sharing involving mobile devices.
- **Decoupled Architecture:** Full-stack Node.js application separating the static frontend from the custom PeerJS signaling server, allowing for flexible deployments.

## 🛠️ Tech Stack

- **Frontend:** HTML5, Vanilla JavaScript, CSS3
- **Signaling Server:** Node.js, Express, PeerJS
- **P2P Technology:** WebRTC (PeerJS)
- **Utilities:** JSZip (folder packaging), QRCode.js

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine.
- NPM (Node Package Manager).

### Installation

1. Clone or download this repository.
2. Install the necessary Node.js dependencies:

```bash
npm install
```

### Running Locally

The `package.json` includes convenient scripts for local development:

- **Run Full App (Development):**
  ```bash
  npm run dev
  ```
  Starts both the PeerJS signaling server (`http://localhost:9000`) and the static frontend (`http://localhost:3000`).

- **Start Only Backend (PeerJS Server):**
  ```bash
  npm run peer
  ```

- **Start Only Frontend:**
  ```bash
  npm run serve
  ```

## 🌍 Connecting Over the Internet

For DropBeam to facilitate transfers across different network environments, the frontend clients need to connect to the backend signaling server hosted online. 

### 1. Cloudflare Tunnel (Development/Testing via internet)

To easily expose your local PeerJS server to the internet without configuring port forwarding:

1. Install `cloudflared` on your system.
2. Start your backend server (`npm run peer`).
3. Run a tunnel pointing to port 9000:
   ```bash
   cloudflared tunnel --url localhost:9000
   ```
4. Copy the generated `.trycloudflare.com` domain.
5. In your `index.html`, locate the `Peer()` initialization and update it:
   ```javascript
   const peer = new Peer({
       host: 'YOUR-NEW-TUNNEL-URL.trycloudflare.com', 
       port: 443,
       path: '/',
       secure: true
   });
   ```

### 2. Production Deployment

**Frontend Deployment (e.g., Vercel):**
- Import the Git repository in your Vercel Dashboard.
- Leave settings as default (Framework preset to "Other").
- Vercel will host `index.html` seamlessly as static content.

**Backend Deployment (e.g., Railway, Render, VPS):**
- Deploy the codebase using `npm start` as your start command.
- Update the `host` and `secure` configurations in the frontend's `index.html` to point to your new deployed backend domain before deploying the frontend.

## 📜 License

This project is distributed under the terms of the ISC License. Please see the [LICENSE](LICENSE) file for more details.
