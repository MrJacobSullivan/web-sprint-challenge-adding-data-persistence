const router = require('express').Router()

const Tasks = require('./model')

// [GET] /api/tasks
/*
  [
    {
      "task_id": 1,
      "task_description": "baz",
      "task_notes": null,
      "task_completed": false,
      "project_name: "bar",
      "project_description": null.
    },
  ]
*/

router.get('/', async (req, res, next) => {
  Tasks.getAllTasks()
    .then((tasks) => res.json(tasks))
    .catch(next)
})

// [POST] /api/tasks

module.exports = router
