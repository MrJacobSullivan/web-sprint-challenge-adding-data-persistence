const validateProject = (req, res, next) => {
  const { project_name, project_description: pd, project_completed: pc } = req.body

  if (project_name === undefined || typeof project_name !== 'string') {
    next({ status: 400, message: 'project_name is required' })
  } else {
    req.project = {
      project_name,
      project_description: pd || null,
      project_completed: pc ? 1 : 0,
    }
    next()
  }
}

module.exports = {
  validateProject,
}
