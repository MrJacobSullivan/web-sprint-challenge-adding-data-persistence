const globalModel = require('../global-model')

const getAllTasks = () => {
  return globalModel.getOn(
    'tasks as t',
    'projects as p',
    't.project_id',
    'p.project_id',
    sanitizeTask,
    [
      'task_id',
      'task_description',
      'task_notes',
      'task_completed',
      'project_name',
      'project_description',
    ]
  )
}

const addTask = (newTask) => {
  return globalModel.add('tasks', 'project_id', newTask, sanitizeTask)
}

// converts mysql3 integers to booleans where appropriate
const sanitizeTask = (task) => {
  const { task_completed: tc } = task
  return { ...task, task_completed: !!tc }
}

module.exports = {
  getAllTasks,
  addTask,
}
