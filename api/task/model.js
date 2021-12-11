const model = require('../global-model')

/*
select
  task_id,
  task_description,
  task_notes,
  task_completed,
  project_name,
  project_description
from tasks as t
join projects as p
on t.project_id = p.project_id;
*/

const getAllTasks = () => {
  return model.getOn('tasks as t', 'projects as p', 't.project_id', 'p.project_id', sanitizeTask, [
    'task_id',
    'task_description',
    'task_notes',
    'task_completed',
    'project_name',
    'project_description',
  ])
}

// converts mysql3 integers to booleans where appropriate
const sanitizeTask = (task) => {
  const { task_completed: tc } = task
  return { ...task, task_completed: !!tc }
}

module.exports = {
  getAllTasks,
}
