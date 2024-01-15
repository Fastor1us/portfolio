import express from 'express';
import { projects } from '../data/project-data.js';
const router = express.Router();


router.get('/', (req, res) => {
  res.json(projects);
});

router.get('/:title', (req, res) => {
  const { title } = req.params;
  const project = projects.find(
    project => project.title === title
  )
  if (project) {
    res.json(project);
    return;
  }
  res.status(500).json({ error: 'Ошибка сервера' });
});


export { router as projectRoutes };
