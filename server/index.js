const express = require('express');
const cors = require('cors')
const app = express();
const port = 1128; // You can choose any available port
const userRoutes = require("./router/user.routes.js")
const adminRoutes = require("./router/admin.router.js")
const flightsRoutes = require("./router/flights.router.js")

const seatsRoutes = require("./router/seats.routes.js")
const ReservationRoutes = require("./router/reservation.routes.js")
const brandsRoutes = require("./router/brandes.routes.js")
const paymentRoutes = require("./router/payment.routes.js")
require("./database/index.js")
app.use(express.json());
app.use(cors())
// Define a route


app.use("/users", userRoutes)
app.use("/admin", adminRoutes)
app.use("/reservation",ReservationRoutes)
app.use("/payment",paymentRoutes)
app.use("/brands", brandsRoutes )





app.use("/flights",flightsRoutes)
app.use("/seats", seatsRoutes)

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
