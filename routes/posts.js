 const express = require('express')

 const { getPosts, getPost, getPostsBySearch, createPost, commentPost, updatePost, deletePost, likePost, getPostsByCreator } = require('../controllers/posts.js');
 const auth = require('../middleware/auth.js');

 const router = express.Router();

 router.get('/creator', getPostsByCreator);
 router.get('/search', getPostsBySearch);
 router.get('/', getPosts);
 router.get('/:id', getPost);

 router.post("/", auth, createPost);
 router.patch("/:id", auth, updatePost);
 router.delete("/:id", auth, deletePost);
 router.patch("/:id/likepost", auth, likePost);
 router.post('/:id/commentPost', commentPost);

 module.exports = router;
