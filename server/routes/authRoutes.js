const router = require('express').Router()

const {login, register, logout, refreshtoken} = require('../controllers/authController')

router.post('/login', login)

router.post('/register', register)

router.post('/logout', logout)

router.post('/refresh_token', refreshtoken)

module.exports = router