const router = require('express').Router()
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    if (req.session.savingsGoal=== undefined) {
      req.session.savingsGoal = 0
    }
    res.json(req.session.savingsGoal)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    req.session.savingsGoal = req.body.savingsGoal
    res.json(req.session.savingsGoal)
  } catch (err) {
    next(err)
  }
})
