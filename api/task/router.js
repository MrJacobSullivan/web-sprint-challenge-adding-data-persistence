const router = require('express').Router()

const Tasks = require('./model')
const { validateTask, validateProjectId } = require('./middleware')

// [GET] /api/tasks
router.get('/', async (req, res, next) => {
  Tasks.getAllTasks()
    .then((tasks) => res.json(tasks))
    .catch(next)
})

// [POST] /api/tasks
router.post('/', [validateTask, validateProjectId], (req, res, next) => {
  Tasks.addTask(req.task)
    .then((task) => res.status(201).json(task))
    .catch(next)
})

module.exports = router
