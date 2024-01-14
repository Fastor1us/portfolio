import express from 'express';
const router = express.Router();

import { projects } from '../data/project-data.js';

router.get('/get-all', (req, res) => {
  res.json(projects);
});

export { router as projectRoutes };
