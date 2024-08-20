// routes/posts.js
import express from 'express';
import { getPosts, savePost, uploadPost } from '../controllers/posts.js';
import { upload } from '../middleware/upload.js';
import { getComment, saveComment } from '../controllers/comment.js';

const router = express.Router();

router.get('/post', getPosts);
router.get('/post/:id', getPosts);
router.post('/post', savePost);

router.get('/comment/:idPost', getComment)
router.post('/comment', saveComment)

export default router;
