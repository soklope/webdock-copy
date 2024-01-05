// libraries/frameworks
const express = require('express');
const multer = require('multer');
const upload = multer();  // Multer to recieve, and handle files. Later we should add a new table for files and let multer and createpostcontroller handle creating the relation and post+files

// controllers
const UserController = require('../controllers/userController.js');
const PostController = require('../controllers/postController.js')
const CategoryController = require('../controllers/categoryController.js')
const VerifyController = require ('../controllers/verifyController.js')
const CommentController = require ('../controllers/commentController.js')

// api routing
const router = express.Router();

router.get('/users', UserController.getUserWithRole);
router.get('/user-notifications/:userId', UserController.userGotNewNotification);

router.get('/postsWithStatus', PostController.getPostsWithStatus);
router.get('/getAllPostsByStatus/:postStatus', PostController.getAllPostsByStatus);
router.get('/post/:id', PostController.post); 
router.get('/merged-post/:id', PostController.mergedPost); 
router.get('/postUpvotes/:id', PostController.postIsUpvotedBy); 
router.patch('/changePostStatus/:id/status/:status', PostController.changeStatus); 
router.patch('/upvotepost/:id', PostController.upvotePost); 
router.delete('/items/:id', PostController.deleteItemById);
router.post('/createpost', upload.array('file'), PostController.createNewPost);
router.post('/createmerge/:id/newparent/:parentId', PostController.createMerge); 

router.get('/getCategories', CategoryController.getCategories);

router.post('/handlelogin', VerifyController.verifyUser);

router.post('/createcomment', CommentController.createNewComment);

module.exports = router;

