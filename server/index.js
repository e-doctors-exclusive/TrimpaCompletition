const express = require('express');
const cors = require('cors')
const app = express();
const port = 1128; // You can choose any available port
const axios = require('axios');
const userRoutes = require("./router/user.routes.js")
require("./database/index.js")
app.use(express.json());
// Define a route


app.use("/users", userRoutes)
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
