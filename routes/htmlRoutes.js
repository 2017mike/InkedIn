const router = require('express').Router()
const passport = require('passport')
const { join } = require('path')


router.get('/login', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'login.html'))
})

router.get('/register', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'register.html'))
})


//export routes
module.exports = router