// eslint-disable-next-line
exports.seed = (knex, Promise) => {
  return knex('tasks').insert([
    {
      task_description: 'Test Task 1',
      task_notes: 'Nullam commodo.',
      task_completed: 0,
      project_id: 1,
    },
    {
      task_description: 'Test Task 2',
      task_notes: null,
      task_completed: 0,
      project_id: 1,
    },
    {
      task_description: 'Test Task 3',
      task_notes: null,
      task_completed: 0,
      project_id: 1,
    },
    {
      task_description: 'Test Task 4',
      task_notes: 'Aliquam erat volutpat.',
      task_completed: 1,
      project_id: 2,
    },
    {
      task_description: 'Test Task 5',
      task_notes: null,
      task_completed: 0,
      project_id: 2,
    },
  ])
}
