const mongoose = require('mongoose')
const CustomerSchema = require('../schemas/customers')
const Router = require('express').Router
const CustomerController = new Router()
const Customer = mongoose.model('customers', CustomerSchema)

CustomerController.use('/', (req, res, next) => {
    console.log('reached controllers')
    next()
})

CustomerController.get('/', async (req, res, next) => {
    try {
        if(req.query.customerId){
            const returnedCustomer = await Customer.findById(req.query.customerId)
            res.send(returnedCustomer)
            
        } else {
            const returnedCustomers = await Customer.find()
            res.send(returnedCustomers)
        }
    } catch (error) {
        console.log(error)
    }
})

CustomerController.post('/', async (req, res) => {
    try {
        const customer = new Customer(req.body)
        customer.save()    
        res.send(customer)
    } catch (error) {
        console.log(error)
    }
})

CustomerController.put('/', async (req, res, next) => {
    try {
        const returnedCustomer = await Customer.findById(req.query.customerId)
        returnedCustomer.name.first = req.body.name.first || returnedCustomer.name.first
        returnedCustomer.name.last = req.body.name.last || returnedCustomer.name.last
        returnedCustomer.contactDetails.telephone = req.body.contactDetails.telephone || returnedCustomer.contactDetails.telephone
        returnedCustomer.contactDetails.email = req.body.contactDetails.email || returnedCustomer.contactDetails.email
        returnedCustomer.contactDetails.postcode = req.body.contactDetails.postcode || returnedCustomer.contactDetails.postcode
        returnedCustomer.bankDetails.nameOnAccount = req.body.bankDetails.nameOnAccount || returnedCustomer.bankDetails.nameOnAccount
        returnedCustomer.bankDetails.accountNumber = req.body.bankDetails.accountNumber || returnedCustomer.bankDetails.accountNumber
        returnedCustomer.bankDetails.sortCode = req.body.bankDetails.sortCode || returnedCustomer.bankDetails.sortCode
        returnedCustomer.startDate = req.body.startDate || returnedCustomer.startDate
        returnedCustomer.subscription.name = req.body.subscription.name || returnedCustomer.subscription.name
        returnedCustomer.subscription.level = req.body.subscription.level || returnedCustomer.subscription.level
        returnedCustomer.subscription.id = req.body.subscription.id || returnedCustomer.subscription.id
        returnedCustomer.subscription.activeStatus = req.body.subscription.activeStatus || returnedCustomer.subscription.activeStatus

        res.send(returnedCustomer)
    } catch(error) {
        res.send(error)
    }
})

CustomerController.delete('/:customerId', async (req, res) => {
    try {
        const returnedCustomer = await Customer.findByIdAndDelete(req.params.customerId)
        res.status(200).json({
            "message": `${returnedCustomer._id} has been successfully deleted`
        })
    } catch (error) {
        console.log(error)
    }
})
module.exports = CustomerController