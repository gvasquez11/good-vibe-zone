const express = require('express')
const router = express.Router()
const mainController = require('../controllers/main')
const authController = require('../controllers/auth')
const postController = require('../controllers/posts')
const {ensureAuth } = require("../middleware/auth")

router.get('/', mainController.homePage)
router.get('/login', authController.loginPage)
router.post('/login', authController.postLogin)
router.get('/signup', authController.signupPage)
router.post('/signup', authController.postSignup)
router.get('/logout', authController.logout)
router.get('/profile', ensureAuth, postController.getProfile)

module.exports = router