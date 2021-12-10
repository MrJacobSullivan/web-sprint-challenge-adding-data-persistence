const validateProject = (req, res, next) => {
  const { project_name, project_description, project_completed } = req.body

  if (project_name === undefined || typeof project_name !== 'string') {
    next({ status: 400, message: 'project_name is required' })
  } else {
    req.project = {
      project_name,
      project_description: project_description === undefined ? null : project_description,
      project_completed: project_completed ? 1 : 0,
    }
    next()
  }
}

module.exports = {
  validateProject,
}
