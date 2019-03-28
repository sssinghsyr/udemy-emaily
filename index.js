console.log("Shashank code");

// importing express library
const express = require("express");

require('./services/passport.js');

// creating express application
const app = express();

require('./routes/authRoutes.js')(app);

// host node server on to port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
