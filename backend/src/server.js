import express from 'express';
import { projectRoutes } from './routes/projectsRoutes.js';
import { imagesRouter } from './routes/imagesRouter.js';
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:8080';
const EXTRA_EXTERNAL_URL = process.env.EXTRA_EXTERNAL_ACCESS_ORIGIN || null;

const app = express();
const PORT = process.env.PORT || 8081;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin',
    EXTRA_EXTERNAL_URL ? `${CLIENT_URL}, ${EXTRA_EXTERNAL_URL}` : CLIENT_URL);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(express.json());

app.use('/projects', projectRoutes);
app.use('/images', imagesRouter);

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
