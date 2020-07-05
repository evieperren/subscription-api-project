const Router = require('express').Router
const router = new Router()


router.use('/', (req, res, next) => {
    console.log('reached the router page')
    next()
})
router.use('/customers', require('./controllers/customers'))
router.use('/subscriptions', require('./controllers/subscriptions'))

module.exports = router