const db = require('../data/dbConfig')

const get = async (table) => {
  return db(table)
}

const getBy = async (table, column, key) => {
  return await db(table).where(`${table}.${column}`, key)
}

const add = async (table, item) => {
  return await db(table).insert(item)
}

module.exports = {
  get,
  getBy,
  add,
}
