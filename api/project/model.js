const globalModel = require('../global-model')

const getAllProjects = () => {
  return globalModel.get('projects', (projects) => projects.map(sanitizeProject))
}

const addProject = (newProject) => {
  return globalModel.add('projects', 'project_id', newProject, sanitizeProject)
}

const getProjectById = (project_id) => {
  return globalModel.getBy('projects', 'project_id', project_id)
}

// converts mysql3 integers to booleans where appropriate
const sanitizeProject = (project) => {
  const { project_completed: pc } = project
  return { ...project, project_completed: !!pc }
}

module.exports = {
  getAllProjects,
  addProject,
  getProjectById,
}
