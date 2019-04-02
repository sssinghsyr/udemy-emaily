const passport = require("passport");
const cookieSession = require("cookie-session");
const keys = require("../config/keys.js");

module.exports = app => {
  app.use(
    cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000,
      keys: [keys.cookieKey]
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());

  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get("/auth/google/callback", passport.authenticate("google"));

  app.get("/api/logout", (req, res) => {
    console.out(req.user.emailId,' logged out');
    req.logout();
    res.send(req.user);
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
    // res.send({
    //   user_name: req.user.emailId
    // });
  });

  /*
  app.get('/', (req, res) => {
    res.send({hi: 'there'});
  });
  */
};
