import express from 'express';
import { projectRoutes } from './routes/projectRoutes.js';
const URL = 'http://localhost:8080';

const app = express();
const port = 8081;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', URL);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(express.json());

// Routs
app.use('/project', projectRoutes);

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
