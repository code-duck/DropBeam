<div align="center">
  <h1>⚡ DropBeam</h1>
  <p><strong>Modern, Secure P2P File & Folder Sharing</strong></p>
  <p>
    <img src="https://img.shields.io/badge/Version-1.0.0-0df2c4?style=flat-square" alt="Version">
    <img src="https://img.shields.io/badge/License-ISC-0aafff?style=flat-square" alt="License">
    <img src="https://img.shields.io/badge/P2P-WebRTC-f2c40d?style=flat-square" alt="P2P">
  </p>
</div>

DropBeam is a high-performance, real-time peer-to-peer (P2P) file sharing application. It enables direct transfers between devices using WebRTC, ensuring your data never touches a central storage server.

## 🌟 Key Features

- **True P2P Transfers:** Direct device-to-device communication via WebRTC.
- **Advanced Encryption:** Every transfer is secured with **AES-256-GCM** end-to-end encryption in the browser, on top of WebRTC's native DTLS/SRTP.
- **File & Folder Support:** Share individual files or entire directories (automatically packaged as encrypted ZIPs).
- **No Size Limits:** Large files are streamed in chunks, bypassing traditional server upload limits.
- **Modern UI:** Dark-themed interface with real-time progress tracking, transfer speeds, and network status indicators (LAN vs. Internet).
- **QR Code Integration:** Instant QR generation for seamless mobile sharing.

## 🛠️ Tech Stack

- **Frontend:** HTML5, Vanilla JavaScript, CSS3
- **Signaling Server:** Node.js, Express, PeerJS
- **P2P Engine:** PeerJS (WebRTC)
- **Encryption:** Web Crypto API (AES-256-GCM)
- **Utilities:** JSZip (Folder handling), QRCode.js

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (LTS recommended)
- NPM

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/dropbeam.git
   cd dropbeam
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Local Development

DropBeam consists of a signaling server (`server.js`) and a static frontend (`index.html`).

- **Run Everything (Recommended):**
  ```bash
  npm run dev
  ```
  Starts the PeerJS server (port 9000) and the frontend (port 3000).

- **Start PeerJS Signaling Server Only:**
  ```bash
  npm run peer
  ```

- **Serve Frontend Only:**
  ```bash
  npm run serve
  ```

> **Note:** By default, `index.html` is configured to use a production signaling server on Railway. To use your local server, update the `Peer` configuration in `index.html` to `host: 'localhost', port: 9000, secure: false`.

## 🌍 Deployment

### Frontend (Vercel/Netlify/GitHub Pages)
The frontend is purely static. Deploy `index.html` to any static host. A `vercel.json` is included for zero-config Vercel deployment.

### Backend (Railway/Render/VPS)
The signaling server can be deployed to any Node.js environment.
1. Deploy the code and run `npm start`.
2. Update the `host` in `index.html` to point to your deployed URL.

## 📜 License

Distributed under the ISC License. See `LICENSE` for more information.