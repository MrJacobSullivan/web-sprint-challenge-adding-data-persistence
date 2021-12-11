const Validate = require('../global-middleware')

const validateProject = (req, res, next) => {
  const { project_name, project_description: pd, project_completed: pc } = req.body

  if (Validate.requiredString(project_name)) {
    req.project = {
      project_name,
      project_description: pd || null,
      project_completed: pc ? 1 : 0,
    }
    next()
  } else {
    next({ status: 400, message: 'project_name is required' })
  }
}

module.exports = {
  validateProject,
}
