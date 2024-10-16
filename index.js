const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON

app.use(express.json());

// Basic route to test the server
app.get('/', (req, res) => {
  res.send('This is the Notes API.');
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});