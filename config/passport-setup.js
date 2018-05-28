const passport = require('passport');
const GoogleStrategy = reuire('passport-google-oauth20');
const keys = require('./keys')

passport.use(
  new GoogleStrategy({
    //set up google credentials
    clientID:keys.google.clientID,
    clientSecret:keys.google.clientSecret
  }, () => {
    //callback
  })


)
