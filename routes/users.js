// routes/posts.js
import express from 'express';
import { upload } from '../middleware/upload.js';
import { getUser, getUsers, login, saveUser, uploadUser } from '../controllers/user.js';

const router = express.Router();

router.get('/user', getUsers);
router.get('/user/:id', getUser);
router.post('/user', saveUser);
router.post('/login', login);
router.post('/userImage/:id', upload.single('image'), uploadUser);

export default router;
