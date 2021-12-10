// eslint-disable-next-line
exports.seed = (knex, Promise) => {
  return knex('projects').insert([
    {
      project_name: 'Test Project 1',
      project_description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at tortor odio.',
      project_completed: 0,
    },
    {
      project_name: 'Test Project 2',
      project_description: 'Nulla bibendum posuere massa, et faucibus ligula molestie id.',
      project_completed: 0,
    },
  ])
}
