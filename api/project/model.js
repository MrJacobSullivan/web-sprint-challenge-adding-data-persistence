const db = require('../../data/dbConfig')

const getAll = async () => {
  return await db('projects')
}

module.exports = {
  getAll,
}
