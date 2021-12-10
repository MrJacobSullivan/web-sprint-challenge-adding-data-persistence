const validateResource = (req, res, next) => {
  const { resource_name, resource_description } = req.body

  if (resource_name === undefined || typeof resource_name !== 'string') {
    next({ status: 400, message: 'resource_name is required' })
  } else {
    res.resource = {
      resource_name,
      resource_description: resource_description === undefined ? null : resource_description,
    }
    next()
  }
}

module.exports = {
  validateResource,
}
