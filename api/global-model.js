const db = require('../data/dbConfig')

const get = (table, sanitize, select = ['*']) => {
  return db(table)
    .select(...select)
    .then((rows) => {
      if (sanitize) return sanitize(rows)
      return rows
    })
}

const getBy = (table, key, value, sanitize, select = ['*']) => {
  return db(table)
    .select(...select)
    .where(`${table}.${key}`, value)
    .then(([row]) => {
      if (sanitize) return sanitize(row)
      return row
    })
}

// use to join two tables
const getOn = (
  primaryTable,
  secondaryTable,
  fromPrimaryKey,
  toSecondaryKey,
  sanitize,
  select = ['*']
) => {
  return db(primaryTable)
    .select(...select)
    .join(secondaryTable, fromPrimaryKey, toSecondaryKey)
    .then((rows) => {
      if (sanitize) return rows.map(sanitize)
      return rows
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
  getOn,
  add,
}
