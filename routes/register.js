const express = require('express');
const User = require('../models/users.js');
const bodyParser = require('body-parser');
const isLoggedIn = require('../middleware');
const userController = require('../controllers/userController');
const passport = require('passport');
const router = express.Router();

router.get('/register', userController.registerPage);

router.post('/register', (req,res) =>{
  User.register(new User({username: req.body.username, email: req.body.email}), req.body.password, (err, user) => {
    if (err) {
      console.log(err);
      return res.render('register');
    }
    passport.authenticate('local')(req, res, () => {
      res.redirect('/products');
    });
  });
});

router.get('/login', (req,res) => {
  res.render('register/login');
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/products',
  failureRedirect: '/login'
}));

router.get('/logout', (req,res) =>{
  req.logout();
  res.redirect('/');
});

module.exports = router;