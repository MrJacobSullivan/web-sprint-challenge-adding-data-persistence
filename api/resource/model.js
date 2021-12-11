const globalModel = require('../global-model')

const getAllResources = () => {
  return globalModel.get('resources')
}

const getByResourceName = (resource_name) => {
  return globalModel.getBy('resources', 'resource_name', resource_name)
}

const addResource = (newResource) => {
  return globalModel.add('resources', 'resource_id', newResource)
}

module.exports = {
  getAllResources,
  getByResourceName,
  addResource,
}
