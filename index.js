// index.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// In-memory database (for demo purposes)
const responses = [];

// Endpoint to receive questionnaire responses
app.post('/submit', (req, res) => {
  const response = req.body;
  responses.push(response);
  console.log('Received response:', response);
  res.status(200).json({ message: 'Response received successfully.' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
