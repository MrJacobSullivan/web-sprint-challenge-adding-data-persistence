const router = require('express').Router()

const Resources = require('./model')
const { validateResource, validateUniqueResourceName } = require('./middleware')

// [GET] /api/resources
router.get('/', (req, res, next) => {
  Resources.getAllResources()
    .then((resources) => res.json(resources))
    .catch(next)
})

// [POST] /api/resources
router.post('/', [validateResource, validateUniqueResourceName], (req, res, next) => {
  Resources.addResource(req.resource)
    .then((resource) => res.status(201).json(resource))
    .catch(next)
})

module.exports = router
