const Projects = require('../project/model')
const Validate = require('../global-middleware')

const validateTask = (req, res, next) => {
  const { task_description, project_id } = req.body

  if (Validate.requiredString(task_description) && Validate.requiredNumber(project_id)) {
    req.task = req.body
    next()
  } else {
    next({ status: 400, message: 'task_description and project_id are required' })
  }
}

const validateProjectId = (req, res, next) => {
  const { project_id } = req.body

  Projects.getProjectById(project_id).then((project) => {
    if (project) {
      next()
    } else {
      next({ status: 400, message: 'project_id does not exist' })
    }
  })
}

module.exports = {
  validateTask,
  validateProjectId,
}
