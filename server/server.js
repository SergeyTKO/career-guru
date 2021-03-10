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
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

// ------------------GOOGLE AUTH--------------------------------
import session from "express-session";
import cookieParser from "cookie-parser";
import GoogleStrategy from "passport-google-oauth20";
import cookieSession from "cookie-session";
import sessionFileStore from "session-file-store";
const FileStore = sessionFileStore(session);
const googleStrategy = GoogleStrategy.Strategy;
// app.use(
//   session({
//     store: new FileStore(),
//     name: "user_sid",
//     secret: "secret",
//     resave: true,
//     saveUninitialized: false,
//     cookie: {
//       expires: 86400000,
//       httpOnly: false,
//     },
//   })
// ),
// app.use(cookieParser("secret"));
app.use(passport.initialize());
// app.use(passport.session());

passport.serializeUser(function (user, done) {
  done(null, user._id);
});
passport.deserializeUser((_id, done) => {
  User.findById(_id)
    .then((user) => {
      done(null, user);
    })
    .catch((e) => {
      done(new Error("Failed to deserialize an user"));
    });
});

passport.use(
  new googleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:4000/auth/google/callback",
      proxy: true,
    },
    async function (accessToken, refreshToken, profile, done) {
      //check user table for anyone with a facebook ID of profile.id
      const currentUser = await User.findOne({ googleId: profile.id });

      if (!currentUser) {
        const newUser = await new User({
          googleId: profile.id,
          firstName: profile.displayName,
          username: profile.username,
          provider: "google",
          avatar: profile.photos[0].value,
          status: "beginner",
          score: 0,
          isAdmin: false,
        });
        await newUser.save(function (err) {
          if (err) throw err;
          done(null, newUser);
        });
        if (newUser) {
          done(null, newUser);
        }
      } else {
        done(null, currentUser);
      }
    }
  )
);

app.get(
  "/auth/google",
  passport.authenticate("google", {
    session: true,
    scope: ["profile", "email"],
  })
);

// const authCheck = (req, res, next) => {
//   if (!req.user) {
//     res.status(401).json({
//       authenticated: false,
//       message: "user has not been authenticated",
//     });
//   } else {
//     next();
//   }
// };

// app.get("/", authCheck, (req, res) => {
//   res.status(200).json({
//     authenticated: true,
//     message: "user successfully authenticated",
//     user: req.user,
//     cookies: req.cookies,
//   });
// });

app.get("/auth/login/success", (req, res) => {
  if (req.user) {
    console.log(req.user);
    res.json({
      message: "User Authenticated",
      user: req.user,
      cookies: req.cookies,
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
    successRedirect: process.env.CLIENT_HOME_PAGE_URL,
    failureRedirect: "/auth/login/failed",
  })
);

// ------------------GOOGLE AUTH--------------------------------

const server = http.createServer(app);
const PORT = process.env.PORT || 4000;
dbConnect();
appConfig(app);
routersConfig(app);

server.listen(PORT, () => console.log(`server on ${PORT}`));
