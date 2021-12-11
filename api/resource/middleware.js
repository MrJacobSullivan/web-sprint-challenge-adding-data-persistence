const Resources = require('./model')
const Validate = require('../global-middleware')

const validateResource = (req, res, next) => {
  const { resource_name, resource_description: rd } = req.body

  if (Validate.requiredString(resource_name)) {
    req.resource = {
      resource_name,
      resource_description: rd || null,
    }
    next()
  } else {
    next({ status: 400, message: 'resource_name is required' })
  }
}

const validateUniqueResourceName = (req, res, next) => {
  const { resource_name } = req.body

  Resources.getByResourceName(resource_name)
    .then((resource) => {
      if (resource) {
        next({ status: 400, message: 'resource_name already exists' })
      } else {
        next()
      }
    })
    .catch(next)
}

module.exports = { validateResource, validateUniqueResourceName }
