const router = require('express').Router()
const { Post } = require('../models')
const passport = require('passport')
//all of these routes require the user to be authenticated
//led with the /api route

//get posts
router.get('/posts', passport.authenticate('jwt'), (req, res) => {
  res.json(req.user)
})

//create post
router.post('/posts', passport.authenticate('jwt'), (req, res) => Post.create({
  //true for request, false for an offer
  type: req.body.type,
  imgUrl: req.body.imgUrl,
  body: req.body.body,
  contactEmail: req.body.contactEmail,
  contactNumber: req.body.contactNumber,
  uid: req.user.id
})
  .then(post => res.json(post))
  .catch(err => console.log(err)))

//update post: May not be used (6/22/21)
router.put('/posts/:id', passport.authenticate('jwt'), (req, res) => Post.update(req.body, { where: { id: req.params.id } })
  .then(() => res.sendStatus(200))
  .catch(err => console.log(err)))

//delete post
router.delete('/posts/:id', passport.authenticate('jwt'), (req, res) => Post.destroy({ where: { id: req.params.id } })
  .then(() => res.sendStatus(200))
  .catch(err => console.log(err)))

//export routes
module.exports = router
