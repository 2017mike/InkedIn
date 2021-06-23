const router = require('express').Router()
const passport = require('passport')
const { join } = require('path')

//login is the main index page (index)
router.get('/login', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'index.html'))
})

router.get('/register', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'register.html'))
})

router.get('/login', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'login.html'))
})

router.get('/register', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'register.html'))
})


//export routes
module.exports = router