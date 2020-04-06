// require express
const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const mongodb = require('mongodb');
const mongoose = require('mongoose');

require('dotenv').config();

// connect to db & fix deprecation warnings (from a tutorial)
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})

// router object
const router = express.Router();

router.use(express.json());

// export router
module.exports = router;

router.use('/json', (req, res, next) => {
console.log(req.method + ' ' + req.path + ' - ' + req.ip);
  next();
});

/*****************/
/****** GET ******/
/*****************/

// login page
router.get('/', (req, res) => {
  res.render('./pages/login');
});

// signup page
router.get('/signup', (req, res) => {
  res.render('./pages/signup');
});

// age page
router.get('/age/:id', (req, res) => {
  res.render('./pages/age');
});

// gender page
router.get('/gender/:id', (req, res) => {
  res.render('./pages/gender');
});

// location page
router.get('/location/:id', (req, res) => {
  res.render('./pages/location');
});

/*****************/
/****** POST ******/
/*****************/



// when a user requests a page that doesn't exits than they will be sent to a '404'-page
router.get('*', (req, res) => {
  res.render('./pages/404');
});
