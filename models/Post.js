const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Post extends Model { }

Post.init({
  //true for request, false its an offer
  type: DataTypes.BOOLEAN,
  imgURL: DataTypes.STRING,
  body: DataTypes.STRING,
  contactEmail: DataTypes.STRING,
  contactNumber: DataTypes.STRING
}, { sequelize, modelName: 'post' })

module.exports = Post