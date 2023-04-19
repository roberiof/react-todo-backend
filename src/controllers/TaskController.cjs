const TaskModel = require('../models/TaskModel.cjs')

const getAll = async(req,res) =>{
  try{
    const tasks = await TaskModel.find()
    return res.status(200).json(tasks)
  }catch(error){
    console.log('Error: ' + error.message)
  }
}

const deleteById = async(req,res) =>{
  try{
    const id = req.params.id
    const task = await TaskModel.findByIdAndRemove(id)
    return res.status(204).json(task)
  }catch(error){
    console.log('Error: ' + error.message)
  }
}

const editById = async(req,res) =>{
  try{
    const id = req.params.id
    const task = {
      name: req.body.name,
      done: req.body.done
    }
    const response = await TaskModel.findByIdAndUpdate(id , task , {new: true})
    return res.status(204).json(response)
  }catch(error){
    console.log('Error: ' + error.message)
  }
}

const post = async(req,res) =>{
  try{
    const task = {
      name: req.body.name,
      done: req.body.done
    }
    const response = await TaskModel.create(task)
    return res.status(201).json(response)
  }catch(error){
    console.log('Error: ' + error.message)
  }
}

module.exports = {
  getAll,
  deleteById,
  editById,
  post
}