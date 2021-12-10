const db = require('../../data/dbConfig')

const getAll = async () => {
  return await db('resources')
}

const getById = async (resource_id) => {
  const [resource] = await db('resources as r').where('r.resource_id', resource_id)
  return resource
}

const add = async (resource) => {
  const resource_id = await db('resources').insert(resource)
  return await getById(resource_id)
}

module.exports = {
  getAll,
  add,
}
