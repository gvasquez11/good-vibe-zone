const express = require('express')
const router = express.Router();
const upload = require('../middleware/multer')
const postController = require('../controllers/posts')
const {ensureAuth } = require("../middleware/auth")


router.get('/createPost', postController.getPostPage)
router.post('/createPost', upload.single('file'), postController.createPost)
router.get('/feed', ensureAuth, postController.getFeed)
router.put('/likePost/:id', postController.likePost)
router.delete('/deletePost/:id', postController.deletePost)
// router.get('/:id')


module.exports = router