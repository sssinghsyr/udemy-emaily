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
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        console.log(
          "Existing User has logged in with emailId: ",
          existingUser.emailId
        );
        done(null, existingUser);
      } else {
        const user = await new User({
          googleId: profile.id,
          emailId: profile._json.email,
          displayName: profile._json.name,
          profilePic: profile._json.picture
        }).save();
        done(null, user);
      }
    }
  )
);
