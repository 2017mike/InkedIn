const router = require('express').Router()
const { Comment } = require('../models')
const passport = require('passport')
//all of these routes require the user to be authenticated

//get comments array
router.get('/comments', passport.authenticate('jwt'), (req, res) => {
  res.json(req.user.comments)
})

//create comment
router.post('/comments', passport.authenticate('jwt'), (req, res) => Comment.create({
  body: req.body.body,
  uid: req.user.id,
  pid: req.body.pid
})
  .then(post => res.json(post))
  .catch(err => console.log(err)))

//update comment: May not be used (6/22/21)
router.put('/comments/:id', passport.authenticate('jwt'), (req, res) => Comment.update(req.body, { where: { id: req.params.id } })
  .then(() => res.sendStatus(200))
  .catch(err => console.log(err)))

//delete comment
router.delete('/comments/:id', passport.authenticate('jwt'), (req, res) => Comment.destroy({ where: { id: req.params.id } })
  .then(() => res.sendStatus(200))
  .catch(err => console.log(err)))

//export routes
module.exports = router