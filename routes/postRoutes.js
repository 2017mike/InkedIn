const router = require('express').Router()
const { User, Post, Comment } = require('../models')
const passport = require('passport')
//all of these routes require the user to be authenticated
//led with the /api route

//get all posts from all users and all the comments per post
router.get('/posts', passport.authenticate('jwt'), (req, res) => Post.findAll({
  include: [Comment]
})
  .then(posts => res.json(posts))
  .catch(err => console.log(err)))

//get all posts from one user
router.get('/posts/users', passport.authenticate('jwt'), (req, res) => {
  Post.findAll({
    where: { uid: req.user.id },
    include: [User, Comment]
  })
    .then(posts => res.json(posts))
    .catch(err => console.log(err))
})

//get one post by id
router.get('/posts/:id', passport.authenticate('jwt'), (req, res) => Post.findOne({ where: {id: req.params.id}, include: [Comment]
})
  .then(posts => res.json(posts))
  .catch(err => console.log(err)))

//create post
router.post('/posts', passport.authenticate('jwt'), (req, res) => Post.create({
  //true for request, false for an offer
  type: req.body.type,
  imgURL: req.body.imgURL,
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
