const db = require('../../data/dbConfig')

const getAll = async () => {
  return await db('projects')
}

const getById = async (project_id) => {
  const [project] = await db('projects as p').where('p.project_id', project_id)
  return project
}

const add = async (project) => {
  const project_id = await db('projects').insert(project)
  return await getById(project_id)
}

module.exports = {
  getAll,
  add,
}
