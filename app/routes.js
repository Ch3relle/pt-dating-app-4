// require packages
const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const mongo = require('mongodb');
const alertNode = require('alert-node');
const bcrypt = require('bcryptjs');
const saltRounds = 15;
const { check, validationResult } = require('express-validator');


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

  mongo.MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => { 
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


// function registration(request, response, next) {
//     db.collection('users').insertOne({
//         name: request.body.name,
//         email: request.body.email,
//         password: request.body.password
//     })
//
//
//     alertNode('Registration complete');
//     return response.redirect('login');
// }



router.post('/sendSignupForm', [check()], function(req, res){
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;

  [check('name', 'Name is requierd').notEmpty(),
  check('email', 'Email is requierd').notEmpty(),
  check('email', 'Email is not valid').notEmpty(),
  check('password', 'Password is required').notEmpty(),
  check('confirmPassword', 'Passwords do not match').equals(req.body.password)]


  const errors = validationResult(req);

  if(errors) {
    res.render('./signup', {
      errors:errors
    });
  } else {
    function addUser(req, res) {
      db.collection('users').insertOne({
        name:name,
        email:email,
        password:password,
        confirmPassword:confirmPassword
      });

      bcrypt.genSalt(15, function(err, salt) {
        bcrypt.hash(addUser.password, salt, function(err, hash){
          if(err) {
            console.log(err);
          }
          addUser.password = hash;
          addUser.save(function(err){
            if(err) {
              console.log(err);
              return;
            } else {
              // alertNode('Registration complete');
              res.redirect('/');
            }
          });
        });
      });
    }
  }
});




// // receiving name from signup form
// router.post('/sendSignupForm', (req, res) => {
//    db.collection('users').insertOne(
//      {
//        name: req.body.name,
//        email: req.body.email,
//        password: req.body.password
//      });
//   res.redirect('/signup/sendSignupForm/login');
//   alertNode('Registration complete');
//   console.log('name: ' + req.body.users + ', ' + 'email: ' + req.body.email + ', ' + 'password: ' + req.body.password);
// });




// function registration(req, res) {
//     db.collection('users').insertOne({
//         email: req.body.email,
//         password: req.body.password
//     })
//
//     alertNode('Registration complete');
//     return res.redirect('login');
// }

// when a user requests a page that doesn't exits than they will be sent to a '404'-page
router.get('*', (req, res) => {
  res.render('./404');
});
