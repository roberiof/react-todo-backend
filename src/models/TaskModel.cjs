const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema(
  {
    name:{
      type: String,
      trim: true
    },
    done:{
      type: Boolean,
      required: true
    }
  }, 
  { timestamps: true }
)

const TaskModel = mongoose.model('Task' , taskSchema)

module.exports = TaskModel