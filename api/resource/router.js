const router = require('express').Router()

const Resources = require('./model')

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

module.exports = router
