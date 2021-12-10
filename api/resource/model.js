const model = require('../global-model')

const getAllResources = () => {
  return model.get('resources')
}

const getByResourceName = (resource_name) => {
  return model.getBy('resources', 'resource_name', resource_name)
}

const addResource = (newResource) => {
  return model.add('resources', 'resource_id', newResource)
}

module.exports = {
  getAllResources,
  getByResourceName,
  addResource,
}
