const router = require('express').Router()
const { Comment } = require('../models')
const passport = require('passport')
//all of these routes require the user to be authenticated

//export routes
module.exports = router