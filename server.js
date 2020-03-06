
// requiring express
const express = require('express');
const app = express();

app.use(express.static('static'));

// '=>' means function
app.get('/', (req, res) => {
  res.send('Hello World') // can be found inside of the browser
});

// about page
app.get('/about', (req, res) => {
  res.send([1,2,3]);
});

// contact page
app.get('/contact', (req, res) => {
  res.send('Contact here!');
});

app.get('/images/cat.jpg', (req, res) => {
  res.send('images/cat.jpg');
});

// 404 page
app.get('/404', (req, res) => {
  res.send('404 Not Found');
});

app.listen(3000, () => console.log('Listening on port 3000...'));
