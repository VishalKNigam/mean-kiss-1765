 const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Store connected clients
const clients = new Set();

// Handle WebSocket connections
wss.on('connection', (ws) => {
  // Handle new client connection
  console.log('New client connected');

  // Add the client to the clients Set
  clients.add(ws);

  // Handle incoming messages from the client
  ws.on('message', (message) => {
    //console.log('Received message:', message);

    // Convert the message to a string
    const messageString = message.toString();
    console.log(messageString)

    // Broadcast the message to all connected clients
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(messageString);
      }
    });
  });

  // Handle client disconnection
  ws.on('close', () => {
    console.log('Client disconnected');
    // Remove the client from the clients Set
    clients.delete(ws);
  });
});

// Start the server
server.listen(3000, () => {
  console.log('Server started on port 3000');
});
