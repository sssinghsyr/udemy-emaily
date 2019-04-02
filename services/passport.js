const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys.js");
const mongoose = require("mongoose");

const User = mongoose.model("users");

//Create a serialize function to pass into cookies
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => done(null, user));
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          console.log(
            "Existing User has logged in with emailId: ",
            existingUser.emailId
          );
          done(null, existingUser);
        } else {
          new User({
            googleId: profile.id,
            emailId: profile._json.email
          })
            .save()
            .then(user => done(null, user));
        }
      });
    }
  )
);
