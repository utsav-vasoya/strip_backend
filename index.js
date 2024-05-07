// server.js
const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const sampleRoute = require('./routes/routes');

const app = express();
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json()); 

const port = process.env.PORT || 8080;

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/api', sampleRoute);

  
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
