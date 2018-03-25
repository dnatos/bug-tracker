const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const flash = require('connect-flash');
const Product = require('./models/products');
const Issues = require('./models/issues');
const User = require('./models/users');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const fileUpload = require('express-fileupload');
const axios = require('axios');
const dotenv = require('dotenv');

const productRoutes = require('./routes/products');
const issueRoutes = require('./routes/issues');
const registerRoutes = require('./routes/register');

dotenv.config({ path: 'variables.env' });

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DBPATH, { useMongoClient: true });

app.use(fileUpload({
  safeFileNames: true
}));

app.use(require('express-session')({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false
}));

app.set('view engine', 'ejs');

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});

app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(flash());
app.use(productRoutes);
app.use(issueRoutes);
app.use(registerRoutes);


app.get('*', (req, res) => {
  res.redirect('back');
});
app.listen(process.env.PORT, () => {
  console.log(`Server starts at port: ${process.env.PORT}`);
});
