console.log('Hello World');

// importing express library
const express = require('express');

// creating express application
const app = express();

app.get('/', (req, res) => {
  res.send({hi: 'there'});
});

// host node server on to port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
