const router = require('express').Router()
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    if (req.session.salary === undefined) {
      req.session.salary = 80000
    }
    res.json(req.session.salary)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    req.session.salary = req.body.salary
    res.json(req.session.salary)
  } catch (err) {
    next(err)
  }
})
