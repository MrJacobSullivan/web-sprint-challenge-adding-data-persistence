const model = require('../global-model')

const getAllProjects = () => {
  return model.get('projects', (projects) => projects.map(sanitizeProject))
}

const addProject = (newProject) => {
  return model.add('projects', 'project_id', newProject, sanitizeProject)
}

// converts mysql3 integers to booleans where appropriate
const sanitizeProject = (project) => ({
  ...project,
  project_completed: !!project.project_completed,
})

module.exports = {
  getAllProjects,
  addProject,
}
