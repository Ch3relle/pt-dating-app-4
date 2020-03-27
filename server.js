// requiring express
const express = require('express');
const app = express();

app.set('view engine', 'ejs'); // here I set the engine I'm using to create templates
app.set('views', '/views');
app.use(express.static('public'));


// '=>' means arrow function
app.get('/', (req, res, next) => {
  res.send('Hello World') // can be found inside of the browser
});

// about page
app.get('/pages/about.html', (req, res, next) => {
  res.send('/pages/about.html');
});

// contact page
app.get('/pages/contact.html', (req, res, next) => {
  res.send('/pages/contact.html');
});

app.get('/images/cat.jpg', (req, res, next) => {
  res.send('images/cat.jpg');
});

app.get('/*mp3', (req, res, next) => {
  res.send('/audio/AmIWrong.mp3');
});


app.get('/signin', (req, res) => {
  res.render('signin');
});


// 404 page, user will be sent to a ejs-page
app.get('*', (req, res, next) => {
  res.render('404');
});


app.listen(3000, () => console.log('Listening on port 3000...'));
