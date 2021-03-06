import http from "http";
import app from "./app.js";

import appConfig from "./middleware/config.js";
import routersConfig from "./middleware/routersConfig.js";

import passport from "passport";
import User from "./models/userModel.js";

import dotenv from "dotenv";

dotenv.config();

passport.serializeUser(function (user, done) {
  done(null, user.id);
});
passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

// ------------------JWT--------------------------------

import JwtStrategy from "passport-jwt";
const jwtStrategy = JwtStrategy.Strategy;
import ExtractJwt from "passport-jwt";
const extractJwt = ExtractJwt.ExtractJwt;
var opts = {};
opts.jwtFromRequest = extractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "dfgfdgdfgdfgdgdfgdfgsdafa";
opts.issuer = "accounts.examplesoft.com";
opts.audience = "yoursite.net";
passport.use(
  new jwtStrategy(opts, function (jwt_payload, done) {
    User.findOne({ id: jwt_payload.sub }, function (err, user) {
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
        // or you could create a new account
      }
    });
  })
);
var cookieExtractor = function(req) {
  var token = null;
  if (req && req.cookies)
  {
      token = req.cookies['jwt'];
  }
  return token;
};

app.post('/profile', passport.authenticate('jwt', { session: false }),
    function(req, res) {
        res.send(req.user.profile);
    }
);

// ------------------GOOGLE--------------------------------
import GoogleStrategy from "passport-google-oauth20";
const googleStrategy = GoogleStrategy.Strategy;

passport.use(
  new googleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://www.example.com/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      User.findOrCreate({ googleId: profile.id }, function (err, user) {
        return cb(err, user);
      });
    }
  )
);

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/");
  }
);

app.use(passport.initialize());
app.use(passport.session());

const server = http.createServer(app);
const PORT = process.env.PORT || 4000;

appConfig(app);
routersConfig(app);

server.listen(PORT, () => console.log(`server on ${PORT}`));
