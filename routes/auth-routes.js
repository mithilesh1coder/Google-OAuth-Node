const router = require('express').Router();
const passport = require('passport');
const passportSetup = require('./../config/passport-setup')
//auth login
router.get('/login', (req,res) => {
  res.render('login');
})

//auth logout
router.get('/logout', (req,res) => {
  res.send('Logging out');
})


//auth with google
router.get('/google', passport.authenticate('google',{
  scope:['profile']
})
);

router.get('/google/redirect',passport.authenticate('google'),(req,res) => {
  res.send('You have reached callback URL');
})



module.exports = router
