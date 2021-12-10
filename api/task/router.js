const router = require('express').Router()

const Tasks = require('./model')
const { validateTask } = require('./middleware')

// [GET] /api/tasks
router.get('/', async (req, res, next) => {
  Tasks.getAll().then(res.json).catch(next)
})

// [POST] /api/tasks

module.exports = router
