const express = require('express');
const { getPosts, getPost, createPost, updatePost, deletePost } = require('../controllers/postController');
const router = express.Router();

router.get('/', getPosts);
router.get('/:id', getPost);
router.post('/', createPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

module.exports = router;
