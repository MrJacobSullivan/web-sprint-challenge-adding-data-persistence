const router = require('express').Router()

const Resources = require('./model')
const { validateResource } = require('./middleware')

// [GET] /api/resources
/*
  [
    {
      "resource_id": 1,
      "resource_name": "foo",
      "resource_description": null
    },
  ]
*/
router.get('/', async (req, res, next) => {
  try {
    const resources = await Resources.getAll()
    res.json(resources)
  } catch (err) {
    next(err)
  }
})

// [POST] /api/resources
/*
  {
    "resource_id": 1,
    "resource_name": "foo",
    "resource_description": null
  }
*/
router.post('/', validateResource, async (req, res, next) => {
  try {
    const resource = await Resources.add(req.resource)
    res.status(201).json(resource)
  } catch (err) {
    next(err)
  }
})

module.exports = router
