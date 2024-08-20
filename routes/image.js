// routes/posts.js
import express from 'express';
import { getImage, uploadImage, uploadProfileImage } from '../controllers/image.js';
import { upload } from '../middleware/upload.js';

const router = express.Router();

router.get('/image/:id', getImage);
router.post('/image/:idPost', upload.single('image'), uploadImage);
router.post('/profileImage/:idUser', upload.single('image'), uploadProfileImage);

export default router;
