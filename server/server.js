import http from "http";
import app from "./app.js";

import appConfig from "./middleware/config.js";
import routersConfig from "./middleware/routersConfig.js";
import dbConnect from './seeder/dbConnect.js'
import passport from "passport";
import User from "./models/users.js";

import dotenv from "dotenv";

dotenv.config();


app.use(passport.initialize());
app.use(passport.session());

// ------------------GOOGLE AUTH--------------------------------
import GoogleStrategy from "passport-google-oauth20";
const googleStrategy = GoogleStrategy.Strategy;

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});


passport.use(
  new googleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:4000/auth/google/callback",
    },
    function(accessToken, refreshToken, profile, done) {
      //check user table for anyone with a facebook ID of profile.id
      User.findOne({
        googleId: profile.id 
      }, function(err, user) {
          if (err) {
              return done(err);
          }
        
          if (!user) {
        
              user = new User({
                googleId: profile.id,
                firstName: profile.displayName,
                username: profile.username,
                provider: 'google',
                avatar: profile.photos[0].value,
                status:'beginner',
                score:0,
                isAdmin:false
              });
              user.save(function(err) {
                  if (err) console.log(err);
                  return done(err, user);
              });
          } else {
              //found user. Return
              return done(err, user);
          }
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
    res.status(201).end();
  }
);

// ------------------GOOGLE AUTH--------------------------------

const server = http.createServer(app);
const PORT = process.env.PORT || 4000;
dbConnect();
appConfig(app);
<<<<<<< HEAD
=======
// dbConnect()
>>>>>>> dcc9ba1629c9a52c2905dda4ad2f76f58f929656
routersConfig(app);

server.listen(PORT, () => console.log(`server on ${PORT}`));
