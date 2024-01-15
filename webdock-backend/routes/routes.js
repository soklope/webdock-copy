// libraries/frameworks
const express = require('express');
const multer = require('multer');
const upload = multer();  // Multer to recieve, and handle files. Later we should add a new table for files and let multer and createpostcontroller handle creating the relation and post+files

// middleware
const { extractUserFromToken } = require('../middleware/extractUserFromToken.js');


// controllers
const UserController = require('../controllers/userController.js');
const PostController = require('../controllers/postController.js')
const CommentController = require ('../controllers/commentController.js');

// api routing
const router = express.Router();

router.get('/user/settings', extractUserFromToken, UserController.getUserSettings);
router.put('/user/settings', extractUserFromToken, UserController.updateUserSettings);

router.get('/post/:id', extractUserFromToken, PostController.post); 
router.get('/posts/', extractUserFromToken, PostController.getAllPosts); 

router.get('/postsWithStatus', PostController.getPostsWithStatus);
router.get('/getAllPostsByStatus/:postStatus', PostController.getAllPostsByStatus);
router.get('/merged-post/:id', PostController.mergedPost); 
router.get('/postUpvotes/:id', PostController.postIsUpvotedBy); 

router.patch('/changePostStatus/:id/status/:status', PostController.changeStatus); 
router.patch('/upvotepost/:id', PostController.upvotePost); 

router.delete('/items/:id', PostController.deleteItemById);

router.post('/createpost', upload.array('file'), extractUserFromToken, PostController.createNewPost);
router.post('/createmerge/:id/newparent/:parentId', PostController.createMerge); 
router.post('/createcomment', CommentController.createNewComment);


module.exports = router;