const router = require('express').Router()
const TaskController = require('../controllers/TaskController.cjs')
const TaskMiddleware = require('../middleware/TaskMiddleware.cjs')

router.get('/tasks' , TaskController.getAll)

router.delete('/tasks/:id' , TaskController.deleteById)

router.post('/tasks',TaskMiddleware.validateTaskName, TaskController.post)

router.patch('/tasks/:id', TaskMiddleware.validateTaskName, TaskController.editById)

module.exports = router 