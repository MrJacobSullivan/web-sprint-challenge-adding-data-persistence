const model = require('../db-model')

const getAllProjects = () => {
  return model
    .get('projects')
    .then((projects) => projects.map(sanitizeProject))
    .catch(console.log)
}

const getProjectById = (project_id) => {
  return model
    .getBy('projects', 'project_id', project_id)
    .then(([project]) => sanitizeProject(project))
    .catch(console.log)
}

const addProject = async (project) => {
  return model
    .add('projects', project)
    .then((project_id) => {
      return getProjectById(project_id).then(project).catch(console.log)
    })
    .catch(console.log)
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
