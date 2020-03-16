// requiring express
const express = require('express');

const app = express();

app.set('view engine', 'ejs'); // here I set the engine I'm using to create templates
app.use(express.static('static'));

// app.set('views', 'view');

// styling
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/css/style.css')
// });


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

app.get('/*mp3', (req, res) => {
  res.send('/audio/AmIWrong.mp3');
});


app.get('/form1', (req, res) => {
  const username = req.params.form
  res.render('form1', {
    username: username
  })
});


// 404 page, user will be sent to a html-page
app.get('/pages/404.html', (req, res) => {
  res.send('pages/404.html');
});


app.listen(3000, () => console.log('Listening on port 3000...'));
