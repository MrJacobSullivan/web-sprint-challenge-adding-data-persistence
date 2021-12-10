const db = require('../data/dbConfig')

const get = (table, sanitize) => {
  return db(table).then((rows) => {
    if (sanitize) return sanitize(rows)
    return rows
  })
}

const getBy = (table, key, value, sanitize) => {
  return db(table)
    .where(`${table}.${key}`, value)
    .then(([row]) => {
      if (sanitize) return sanitize(row)
      return row
    })
}

const add = (table, key, item, sanitize) => {
  return db(table)
    .insert(item)
    .then((id) => {
      return getBy(table, key, id, sanitize)
    })
}

module.exports = {
  get,
  getBy,
  add,
}
