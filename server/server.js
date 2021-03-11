import http from "http";
import app from "./app.js";

import appConfig from "./middleware/config.js";
import routersConfig from "./middleware/routersConfig.js";
import dbConnect from "./seeder/dbConnect.js";
import passport from "passport";
import User from "./models/users.js";
import cors from "cors";

import dotenv from "dotenv";

dotenv.config();
app.use(
  cors({
    origin: "http://localhost:3000", // allow to server to accept request from different origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // allow session cookie from browser to pass through
  })
);
app.use(passport.initialize());
app.use(passport.session());

// ------------------GOOGLE AUTH--------------------------------
import GoogleStrategy from "passport-google-oauth20";
const googleStrategy = GoogleStrategy.Strategy;

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

passport.use(
  new googleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:4000/auth/google/callback",
      proxy: true,
    },
    function (accessToken, refreshToken, profile, done) {
      //check user table for anyone with a facebook ID of profile.id
      User.findOne(
        {
          googleId: profile.id,
        },
        function (err, user) {
          if (err) {
            return done(err);
          }

          if (!user) {
            user = new User({
              googleId: profile.id,
              firstName: profile.displayName,
              username: profile.username,
              provider: "google",
              avatar: profile.photos[0].value,
              status: "beginner",
              score: 0,
              isAdmin: false,
            });
            user.save(function (err) {
              if (err) console.log(err);
              return done(err, user, accessToken);
            });
          } else {
            //found user. Return
            return done(err, user, accessToken);
          }
        }
      );
    }
  )
);

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get("/auth/login/success", (req, res) => {
  if (req.user) {
    res.json({
      message: "User Authenticated",
      user: req.user,
    });
  } else
    res.status(400).json({
      message: "User Not Authenticated",
      user: null,
    });
});

app.get("/auth/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "user failed to authenticate.",
  });
});

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: 'http://localhost:4000/google',
    failureRedirect: "/auth/login/failed",
  })
);

app.get('/google', (req,res)=>{
  res.json()
})

// app.use(passport.session());
// ------------------GOOGLE AUTH--------------------------------

const server = http.createServer(app);
const PORT = process.env.PORT || 4000;
dbConnect();
appConfig(app);
// dbConnect()
routersConfig(app);

server.listen(PORT, () => console.log(`server on ${PORT}`));
