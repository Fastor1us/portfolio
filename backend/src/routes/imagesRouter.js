import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


router.get('/:title/:image', async (req, res) => {
  const { title, image } = req.params;

  try {
    const imagePath = path.join(__dirname,
      `../public/uploads/${title}/${image}`);
    res.sendFile(imagePath);
  } catch (error) {
    console.error('Ошибка получения картинки:', error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});


export { router as imagesRouter };
