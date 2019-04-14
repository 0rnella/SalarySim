const router = require('express').Router()
module.exports = router

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

router.post('/', async (req, res, next) => {
  try {
    req.session.debtsList.push(req.body)
    res.json(req.session.debtsList)
  } catch (err) {
    next(err)
  }
})

router.delete('/:idx', async (req, res, next) => {
  try {
    const idx = req.params.idx
    req.session.debtsList.splice(idx, 1)
    res.json(req.session.debtsList)
  } catch (err) {
    next(err)
  }
})