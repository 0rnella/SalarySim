const router = require('express').Router()
module.exports = router

router.use('/debts', require('./debts'))
router.use('/expenses', require('./expenses'))
router.use('/salary', require('./salary'))
router.use('/savings', require('./savings'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
