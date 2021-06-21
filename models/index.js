const User = require('./User.js')
const Comment = require('./Comment.js')
const Post = require('./Post.js')
//bring in db models

// 1 User has many comments and posts
User.hasMany(Comment, {foreignKey: 'uid'})
User.hasMany(Post, {foreignKey: 'uid'})
//1 Post also has many comments
Post.hasMany(Comment, { foreignKey: 'uid' })

module.exports = { User, Comment, Post }
