const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    requried: true,
  },
  isDone: {
    type: Boolean,
    required: false
  }
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task