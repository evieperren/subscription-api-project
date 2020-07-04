const Router = require('express').Router
const customerController = new Router()

customerController.use('/', (req, res, next) => {
    console.log('reached controllers')
})
customerController.get('/', async (req, res, next) => {
    // console.log(res)
    try {
        res.send('reached customers controller')
        
    } catch (error) {
        console.log(error)
    }
})

module.exports = customerController