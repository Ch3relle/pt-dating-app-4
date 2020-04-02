// require express
const express = require('express');

// path makes it easier to create paths
const path = require('path');

// router object
const router = express.Router();

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

router.post('/signin', (req, res) => {
  console.log(req.body.message);
});

// getting signup page
router.get('/signup', (req, res) => {
  res.render('./pages/signup');
});


// when a user requests a page that doesn't exits than they will be sent to a '404'-page
router.get('*', (req, res) => {
  res.render('./pages/404');
});













// // about page
// app.get('/pages/about.html', (req, res, next) => {
//   res.send('/pages/about.html');
// });
//
// // contact page
// app.get('/pages/contact.html', (req, res, next) => {
//   res.send('/pages/contact.html');
// });
//
// app.get('/images/cat.jpg', (req, res) => {
//   res.send('images/cat.jpg');
// });
//
// app.get('/*mp3', (req, res) => {
//   res.send('/audio/AmIWrong.mp3');
// });



// var data = [
//   id: '',
//   name: '',
//   email: '',
//   password: ''
// ];
