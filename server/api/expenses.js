const router = require('express').Router()
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    if (req.session.expenses === undefined) {
      req.session.expenses = {
        Rent: 0,
        Food: 0,
        Entertainment: 0,
        'Fitness/vacation/education': 0,
        'Clothing/home': 0,
        Transportation: 0,
        'Bills (home, phone)': 0
      }
    }
    res.json(req.session.expenses)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    req.session.expenses[req.body.category] = req.body.amount
    res.json(req.session.expenses)
  } catch (err) {
    next(err)
  }
})
