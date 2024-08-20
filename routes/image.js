// routes/posts.js
import express from 'express';
import { getImage, uploadImage } from '../controllers/image.js';
import { upload } from '../middleware/upload.js';

const router = express.Router();

router.get('/image/:id', getImage);
router.post('/image/:id', upload.single('image'), uploadImage);

export default router;
