const express = require('express');
const ejs = require('ejs');
const app = express();
const authRoutes = require('./routes/auth-routes')

app.set('view engine','ejs');

app.use('/auth',authRoutes);

app.listen('8500', () => {
  console.log('Listening on port 8500');
});

app.get('/', (req,res) => {
  res.render('home.ejs');
})
