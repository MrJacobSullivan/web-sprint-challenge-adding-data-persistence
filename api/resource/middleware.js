const Resources = require('./model')

const validateResource = (req, res, next) => {
  const { resource_name, resource_description: rd } = req.body

  if (resource_name === undefined || typeof resource_name !== 'string') {
    next({ status: 400, message: 'resource_name is required' })
  } else {
    req.resource = {
      resource_name,
      resource_description: rd || null,
    }
    next()
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
