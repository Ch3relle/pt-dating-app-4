// require packages
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const slug = require('slug');


const app = express();

// setting the engine I'm using to create templates
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static('public'));

// using bodyParser
app.use(bodyParser.urlencoded({extended: false}));

const router = require('./app/routes');
app.use('/', router);

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
