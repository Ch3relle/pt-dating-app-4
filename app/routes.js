// require packages
const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const mongo = require('mongodb');


// router object
const router = express.Router();

router.use(express.json());

// export router
module.exports = router;

router.use('/json', (req, res, next) => {
console.log(req.method + ' ' + req.path + ' - ' + req.ip);
  next();
});

// mongo connection
require('dotenv').config();



let db = null ;
const url = process.env.MONGO_URI;

  mongo.MongoClient.connect(url, {useUnifiedTopology: true}, (err, client) => { 
  if (err) { 
    throw err ;
  } 
console.log('database running') ;
db = client.db(process.env.DB_NAME) });


/*****************/
/****** GET ******/
/*****************/

// login page
router.get('/', (req, res) => {
  res.render('./login');
});

// signup page
router.get('/signup', (req, res) => {
  res.render('./signup');
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
/****** POST *****/
/*****************/

// receiving name from signup form
router.post('/sendSignupForm', (req, res) => {
   db.collection('users').insertOne(
     {
       user: req.body.user,
       email: req.body.email,
       password: req.body.password
     });
  res.redirect('back');
  console.log('user: ' + req.body.users + ', ' + 'email: ' + req.body.email + ', ' + 'password: ' + req.body.password);
});



// when a user requests a page that doesn't exits than they will be sent to a '404'-page
router.get('*', (req, res) => {
  res.render('./404');
});
