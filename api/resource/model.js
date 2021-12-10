const db = require('../../data/dbConfig')

const getAll = async () => {
  return await db('resources')
}

module.exports = {
  getAll,
}
