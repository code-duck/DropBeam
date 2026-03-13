const express = require('express');
const { ExpressPeerServer } = require('peer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 9000;

// Enable CORS for all origins, required when the frontend is hosted elsewhere (e.g. Vercel)
app.use(cors());

// A simple status endpoint
app.get('/', (req, res) => {
    res.send('DropBeam PeerJS Server is running.');
});

// Start the HTTP server
const server = app.listen(PORT, () => {
    console.log(`DropBeam PeerJS server listening on port ${PORT}`);
});

// Initialize the PeerJS server
const peerServer = ExpressPeerServer(server, {
    debug: true,
    path: '/'
});

// Use the PeerJS server middleware
app.use('/', peerServer);

peerServer.on('connection', (client) => {
    console.log('Client connected:', client.getId());
});

peerServer.on('disconnect', (client) => {
    console.log('Client disconnected:', client.getId());
});
