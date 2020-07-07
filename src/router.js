const Router = require('express').Router
const router = new Router()
const winston = require('winston')

router.use('/', (req, res, next) => {
    console.log('Reached router page')
    next()
})
router.use('/customers', require('./controllers/customers'))
router.use('/subscriptions', require('./controllers/subscriptions'))

module.exports = router