// require express
const express = require('express');

// path makes it easier to create paths
const path = require('path');

// router object
const router = express.Router();

router.use(express.json());

// export router
module.exports = router;

// route to message 'Hello World'
router.get('/', (req, res) => {
  res.send('Hello World') // can be found inside of the browser
});

// getting signin page
router.get('/signin', (req, res) => {
  res.render('./pages/signin');
});


// getting signup page
router.get('/signup', (req, res) => {
  res.render('./pages/signup');
});


// when a user requests a page that doesn't exits than they will be sent to a '404'-page
router.get('*', (req, res) => {
  res.render('./pages/404');
});
