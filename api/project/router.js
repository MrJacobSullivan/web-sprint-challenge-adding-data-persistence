const router = require('express').Router()

const Projects = require('./model')
const { validateProject, sanitizeProject } = require('./middleware')

// [GET] /api/projects
router.get('/', async (req, res, next) => {
  try {
    const projects = await Projects.getAll()
    const sanitizedProject = projects.map(sanitizeProject)

    res.json(sanitizedProject)
  } catch (err) {
    next(err)
  }
})

// [POST] /api/projects
router.post('/', validateProject, async (req, res, next) => {
  try {
    const project = await Projects.add(req.project)
    const sanitizedProject = sanitizeProject(project)

    res.status(201).json(sanitizedProject)
  } catch (err) {
    next(err)
  }
})

module.exports = router
