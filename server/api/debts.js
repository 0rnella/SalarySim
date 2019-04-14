const router = require('express').Router()
module.exports = router

router.post('/', async (req, res, next) => {
  try {
    req.session.debtsList.push(req.body)
    res.json(req.session.debtsList)
  } catch (err) {
    next(err)
  }
})

router.get('/', async (req, res, next) => {
  try {
    if (req.session.debtsList === undefined) {
      req.session.debtsList = []
    }
    res.json(req.session.debtsList)
  } catch (err) {
    next(err)
  }
})
