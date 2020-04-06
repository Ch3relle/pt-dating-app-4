// require packages
const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
// const mongoose = require('mongoose');
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
const url = 'mongodb://' + process.env.DB_HOST + ':' + process.env.DB_PORT;

  mongo.MongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) { 
  if (err) { 
    throw err ;
  } 
console.log("database running") ;
db = client.db(process.env.DB_NAME) })


/*****************/
/****** GET ******/
/*****************/

// login page
router.get('/', (req, res) => {
  res.render('./pages/login');
});

// signup page
router.get('/signup', (req, res) => {
  res.render('./pages/signup', { data: data });
  console.log(data);
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

router.post('/signup', (req, res) => {
  db.collection('users').insertOne({  
   name: req.body.name
 }) ;
  res.redirect('back');
});


let data =

// router.post('/sendGenderForm', genderAdded);
//
// genderAdded(req, res) =>




// when a user requests a page that doesn't exits than they will be sent to a '404'-page
router.get('*', (req, res) => {
  res.render('./pages/404');
});
