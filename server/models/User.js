const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    unique: false
  },
  refreshtoken: {
    type: String,
    required: false,
    unique: false
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User