const mongoose = require('mongoose')
const CustomerSchema = require('../schemas/customers')
const Router = require('express').Router
const CustomerController = new Router()
const Customer = mongoose.model('customers', CustomerSchema)

CustomerController.use('/', (req, res, next) => {
    console.log('reached controllers')
    next()
})

CustomerController.get('/', async (req, res) => {
    try {
        if(req.query.customerId){
            const returnedCustomer = await Customer.findById(req.query.customerId)
            res.status(200).send(returnedCustomer)
            
        } else {
            const returnedCustomers = await Customer.find()
            res.status(200).send(returnedCustomers)

            if( returnedCustomers.length === 0){
                res.status(404).json({
                    "message": "No customers found. Please create a customer"
                })
            }
        }
    } catch (error) {
        res.status(500).json({
            "message": `Internal server error. ${error}`
        })
    }
})

CustomerController.post('/', async (req, res) => {
    try {
        const customer = new Customer(req.body)
        customer.save()    
        res.status(201).send(customer)
    } catch (error) {
        res.status(400).json({
            "message": `Bad request. ${error}`
        })
        res.status(500).json({
            "message": `Internal server error. ${error}`
        })
    }
})

CustomerController.put('/:customerId', async (req, res) => {
    try {
        const returnedCustomer = await Customer.findById(req.params.customerId)
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


        returnedCustomer.save()
        res.status(200).send(returnedCustomer)
        
    } catch(error) {
        res.status(400).json({
            "message": `Bad request. ${error}`
        })
        res.status(404).json({
            "message": `No customer found with matching ID. ${error}`
        })
    }
})

CustomerController.delete('/:customerId', async (req, res) => {
    try {
        const returnedCustomer = await Customer.findByIdAndDelete(req.params.customerId)

        if(!returnedCustomer){
            res.status(404).json({
                "message": `No customer found with matching ID.`
            })
        } else {
            res.status(200).json({
                "message": `${returnedCustomer._id} has been successfully deleted`
            })
        }
    } catch (error) {
        res.status(400).json({
            "message": `Bad request. ${error}`
        })
        res.status(500).json({
            "message": `Internal server error. ${error}`
        })
    }
})
module.exports = CustomerController