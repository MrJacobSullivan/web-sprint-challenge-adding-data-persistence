const router = require('express').Router()

const Projects = require('./model')
const { validateProject } = require('./middleware')

// [GET] /api/projects
router.get('/', (req, res, next) => {
  Projects.getAllProjects()
    .then((projects) => res.json(projects))
    .catch(next)
})

// [POST] /api/projects
router.post('/', validateProject, (req, res, next) => {
  Projects.addProject(req.project)
    .then((project) => res.status(201).json(project))
    .catch(next)
})

module.exports = router
