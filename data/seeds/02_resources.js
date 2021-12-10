// eslint-disable-next-line
exports.seed = (knex, Promise) => {
  return knex('resources').insert([
    {
      resource_name: 'Test Resource 1',
      resource_description: 'Donec eu aliquam tortor.',
    },
    {
      resource_name: 'Test Resource 2',
      resource_description: 'Donec vel rhoncus lacus.',
    },
    {
      resource_name: 'Test Resource 3',
      resource_description: 'Nullam fringilla hendrerit diam.',
    },
  ])
}
