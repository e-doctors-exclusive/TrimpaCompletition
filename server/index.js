const express = require('express');
const cors = require('cors');
const http = require('http');
const socketio = require('socket.io');
const userRoutes = require('./router/user.routes.js');
const adminRoutes = require('./router/admin.router.js');
const flightsRoutes = require('./router/flights.router.js');
const seatsRoutes = require('./router/seats.routes.js');
const ReservationRoutes = require('./router/reservation.routes.js');
const paymentRoutes = require('./router/payment.routes.js');
require('./database/index.js');

const app = express();
const port = 1128; // You can choose any available port

app.use(express.json());
app.use(cors());

const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('message', (message) => {
    console.log(`Received message: ${message}`);
    io.emit('message', message);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

app.use('/users', userRoutes);
app.use('/admin', adminRoutes);
app.use('/reservation', ReservationRoutes);
app.use('/payment', paymentRoutes);
app.use('/flights', flightsRoutes);
app.use('/seats', seatsRoutes);

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});