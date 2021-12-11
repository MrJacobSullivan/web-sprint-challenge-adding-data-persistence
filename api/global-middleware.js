const requiredString = (str) => {
  return typeof str === 'string' && str !== undefined
}

const requiredNumber = (num) => {
  return typeof num === 'number' && num >= 1
}

module.exports = {
  requiredString,
  requiredNumber,
}
