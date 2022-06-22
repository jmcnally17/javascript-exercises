const express = require('express');
const app = express();
const port = 3000;

var counter = 0

app.get('/', (req, res) => {
  res.send('Hello World again!');
});

app.post('/counter', (req, res) => {
  counter += 1;
  res.redirect('/counter');
});

app.get('/counter', (req, res) => {
  res.send(`${counter}`);
})

app.delete('/counter', (req, res) => {
  counter = 0
  res.redirect('/counter');
});

console.log(`Server listening on localhost:${port}`);
app.listen(port);