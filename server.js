// require packages
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const slug = require('slug');
const session = require('express-session');

const app = express();

// setting the engine I'm using to create templates
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static('public'));

// express session middleware
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

// express messages middleware
app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

// using bodyParser
app.use(bodyParser.urlencoded({ extended: false }));

const router = require('./app/routes');
app.use('/', router);



// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
