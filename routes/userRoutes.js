const router = require('express').Router()
const { User } = require('../models')
const passport = require('passport')
const jwt = require('jsonwebtoken')

router.post('/users/register', (req, res) => {
  const {
    username
    //registers user, passport takes care of the password, hashes it and adds salt
  } = req.body

  User.register(new User({
    username
  }), req.body.password, err => {
    if (err) { console.log(err) }
    //returns ok status
    res.sendStatus(200)
  })
})

router.post('/users/login', (req, res) => {
  User.authenticate()(req.body.username, req.body.password, (err, user) => {
    if (err) { console.log(err) }
    //returns a json web token as the result
    res.json(user ? jwt.sign({ id: user.id }, process.env.SECRET) : null)
  })
})

//export routes
module.exports = router
