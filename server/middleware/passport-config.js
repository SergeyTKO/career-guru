// import passport from "passport";
// import User from "../models/userModel.js";


// passport.serializeUser(function (user, done) {
//   done(null, user.id);
// });
// passport.deserializeUser(function (id, done) {
//   User.findById(id, function (err, user) {
//     done(err, user);
//   });
// });





// import GoogleStrategy from 'passport-google-oauth20'
// const googleStrategy = GoogleStrategy.Strategy;

// passport.use(new googleStrategy({
//     clientID: '1014851947280-2aldkt4ccl283kabfip97pjg11fbd512.apps.googleusercontent.com',
//     clientSecret: 'GFZW6FfguzWusLUL23NyS3kN',
//     callbackURL: "http://www.example.com/auth/google/callback"
//   },
//   function(accessToken, refreshToken, profile, cb) {
//     User.findOrCreate({ googleId: profile.id }, function (err, user) {
//       return cb(err, user);
//     });
//   }
// ));