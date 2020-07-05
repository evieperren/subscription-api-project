const mongoose = require('mongoose')
const Router = require('express').Router
const customerController = new Router()
const Customer = mongoose.model('customers', require('../schemas/customers'))

customerController.use('/', (req, res, next) => {
    console.log('reached controllers')
    next()
})

customerController.get('/', async (req, res, next) => {
    try {
        console.log('create a mentor')
        
    } catch (error) {
        console.log(error)
    }
})

customerController.post('/', async (req, res, next) => {
    
    try {
        const customer = new Customer(req.body)
            // name: {
            //     first: req.body.name.first,
            //     last: req.body.name.last
            // },
            // contactDetails: {
            //     telephone: "0123456789",
            //     email: 'email@email.com',
            //     postcode: 'SP10 3XD'
            // },
            // bankDetails: {
            //     nameOnAccount: 'EVIE PERREN',
            //     accountNumber: 12345678,
            //     sortCode: 123456
            // },
            // startDate: '01/09/2020',
            // subscription: {
            //     name: 'Small pet plan',
            //     level: 'standard',
            //     id: "1",
            //     activeStatus: 'active'
            // }
        // })
    //    await customer.save()
        console.log(req.body)
        res.send(customer)
    } catch (error) {
        console.log(error)
    }
})
module.exports = customerController