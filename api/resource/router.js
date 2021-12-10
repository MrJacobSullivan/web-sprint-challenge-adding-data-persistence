const router = require('express').Router()

const Resources = require('./model')
const { validateResource } = require('./middleware')

// [GET] /api/resources
router.get('/', async (req, res, next) => {
  try {
    const resources = await Resources.getAll()
    res.json(resources)
  } catch (err) {
    next(err)
  }
})

// [POST] /api/resources
router.post('/', validateResource, async (req, res, next) => {
  try {
    const resource = await Resources.add(req.resource)
    res.status(201).json(resource)
  } catch (err) {
    next(err)
  }
})

module.exports = router
