const { join } = require('path');
const express = require('express');
const bodyParser = require('body-parser');

// TODO users to data.js
let users = [
  {
    id: 0,
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
  const { id } = req.body;
  console.log(id);
  users = users.filter(user => user.id !== id);
  res.sendStatus(200);
});

app.listen(3000, () => console.log('port 3000'));
