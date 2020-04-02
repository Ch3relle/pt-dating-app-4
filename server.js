// require packages
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const slug = require('slug');

const app = express();

// setting the engine I'm using to create templates
app.set('view engine', 'ejs');
app.use(express.static('public'));

// using bodyParser
app.use(bodyParser.urlencoded({extended: false}));

const router = require('./app/routes');
app.use('/', router);


app.listen(3000, () => console.log('Listening on port 3000...'));
