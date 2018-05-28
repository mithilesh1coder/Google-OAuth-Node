const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');


passport.use(
  new GoogleStrategy({
    //set up google credentials
    callbackURL:'/auth/google/redirect',
    clientID:keys.google.clientID,
    clientSecret:keys.google.clientSecret
  }, (accessToken,refreshToken,profile,done) => {
    //callback
    console.log('callback url called');
  })


)
