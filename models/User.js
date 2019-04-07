const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// the above line is equivalent to const {Schema} = mongoose
// Destructuring

// Creating schema for mongodb
const userSchema = new Schema({
  googleId: String,
  emailId: String,
  displayName: String,
  profilePic: String
});

// Creating a collections or table in mongoDb
mongoose.model("users", userSchema);
