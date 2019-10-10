const { join } = require('path');
const express = require('express');
const bodyParser = require('body-parser');

// TODO users to data.js
let users = [
  {
    id: 1,
    firstName: 'Pavel',
    secondName: 'Efimov',
    email: 'test@gmail.com'
  }
];

const app = express();

app.use(bodyParser());

app.use(express.static(join(__dirname, 'dist')));

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.get('/users', (req, res) => {
  res.send(users);
});

app.post('/user', (req, res) => {
  users.push(req.body);

  res.sendStatus(200);
});

app.delete('/user', (req, res) => {
  users.slice(id, id + 1);
  console.log('req.body', req.body);
  // TODO make something
  res.sendStatus(200);
});
app.listen(3000, () => console.log('port 3000'));
