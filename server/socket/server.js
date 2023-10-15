const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = 1129;

app.use(cors({ origin: '*' }));

// Créez un tableau pour stocker les messages
const messages = [];

io.on('connection', (socket) => {
  console.log('Client connected');

  // Envoyez l'historique des messages au client à chaque connexion
  socket.emit('history', messages);

  // Lorsqu'un client demande l'historique des messages
  socket.on('getHistory', () => {
    socket.emit('history', messages);
  });

  socket.on('message', (data) => {
    console.log('Received message:', data);
    messages.push(data);
    // Envoyez le nouveau message à tous les clients, y compris l'expéditeur
    io.emit('message', [data]);

    // Envoi à chaque envoi de message
    socket.emit('history', messages);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
