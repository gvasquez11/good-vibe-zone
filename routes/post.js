const express = require('express')
const router = express.Router();
const upload = require('../middleware/multer')
const postController = require('../controllers/posts')
const {ensureAuth } = require("../middleware/auth")


router.get('/createPost', postController.getPostPage)
router.post('/createPost', upload.single('file'), postController.createPost)

module.exports = router