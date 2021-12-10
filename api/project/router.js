const router = require('express').Router()

const Projects = require('./model')

// [GET] /api/projects
router.get('/', async (req, res, next) => {
  try {
    const projects = await Projects.getAll()

    const sanitizedProjects = projects.map((project) => {
      return {
        ...project,
        project_completed: !!project.project_completed,
      }
    })

    res.json(sanitizedProjects)
  } catch (err) {
    next(err)
  }
})

module.exports = router
