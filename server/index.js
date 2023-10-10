const express = require('express');
const app = express();
const port = 1128; // You can choose any available port
const axios = require('axios');
// Define a route

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
