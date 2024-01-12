const express = require('express');

const app = express();
const port = 8081;

app.get('/', (req, res) => {
  res.send('Привет, мир!');
});

app.get('/users', (req, res) => {
  const users = ['Алиса', 'Боб', 'Кэрол'];
  res.json(users);
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
