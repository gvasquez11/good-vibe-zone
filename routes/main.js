const express = require('express')
const router = express.Router()
const mainController = require('../controllers/main')

router.get('/', mainController.homePage)
router.get('/login', mainController.loginPage)
router.get('/signup', mainController.signupPage)

module.exports = router