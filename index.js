console.log("Shashank code");

const mongoose = require("mongoose");
const keys = require("./config/keys.js");
// importing express library
const express = require("express");

require("./models/User.js");
require("./services/passport.js");

mongoose.connect(keys.mongoURI);
// creating express application
const app = express();

require("./routes/authRoutes.js")(app);
// host node server on to port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);

// mongoose.connect(keys.mongoURI);
