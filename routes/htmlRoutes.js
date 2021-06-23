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


router.get('/register', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'register.html'))
})

router.get('/post', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'post.html'))
})


router.get('/home', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'home.html'))
})



//export routes
module.exports = router