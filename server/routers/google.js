// import express from 'express'
// const router = express.Router()
// import passport from 'passport'
// const app = express()

// app.get('/auth/google',
//   passport.authenticate('google', { scope: ['profile'] }));

// app.get('/auth/google/callback', 
//   passport.authenticate('google', { failureRedirect: '/login' }),
//   function(req, res) {
//     // Successful authentication, redirect home.
//     res.redirect('/');
//   });

// router.route('/')
// .get('/', passport.authenticate('google', { scope: ['profile'] }))

// .get('/callback', passport.authenticate('google', { failureRedirect: '/login' }),
//   function(req, res) {
//     // Successful authentication, redirect home.
//     res.redirect('/');
//   })

// export default router