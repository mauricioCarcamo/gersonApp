// routes/posts.js
import express from 'express';
import { getPosts, savePost, uploadPost } from '../controllers/posts.js';
import { upload } from '../middleware/upload.js';
import { getComment, saveComment } from '../controllers/comment.js';
import { getReaction, saveReaction } from '../controllers/reaction.js';

const router = express.Router();

router.get('/post', getPosts);
router.get('/post/:id', getPosts);
router.post('/post', savePost);

router.get('/comment/:idPost', getComment)
router.post('/comment', saveComment)

router.get('/reaction/:idPost', getReaction)
router.post('/reaction', saveReaction)

export default router;
