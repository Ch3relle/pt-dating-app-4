
// requiring express
const express = require('express');
const app = express();



app.use(express.static('static'));


// '=>' means function
app.get('/', (req, res) => {
  res.send('Hello World') // can be found inside of the browser
});

// about page
app.get('/pages/about.html', (req, res) => {
  res.send('/pages/about.html');
});

// contact page
app.get('/pages/contact.html', (req, res) => {
  res.send('/pages/contact.html');
});

app.get('/images/cat.jpg', (req, res) => {
  res.send('images/cat.jpg');
});

// 404 page, user will be sent to a html-page
app.get('/pages/404.html', (req, res) => {
  res.send('pages/404.html');
});


app.listen(3000, () => console.log('Listening on port 3000...'));
