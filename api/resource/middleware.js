const Resources = require('./model')

const validateResource = async (req, res, next) => {
  const { resource_name, resource_description } = req.body

  const resource = await Resources.getByResourceName(resource_name)

  if (!resource) {
    if (resource_name === undefined || typeof resource_name !== 'string') {
      next({ status: 400, message: 'resource_name is required' })
    } else {
      req.resource = {
        resource_name,
        resource_description: resource_description === undefined ? null : resource_description,
      }
      next()
    }
  } else {
    next({ status: 400, message: 'resource_name already exists' })
  }
}

module.exports = {
  validateResource,
}
