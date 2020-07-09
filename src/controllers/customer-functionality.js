const Customer = require('../models/customers')
const { validationResult } = require('express-validator')
const winston = require('winston')
const axios = require('axios')

async function getAllCustomers (req, res) {
    try {
        if(req.query.customerId){
            const returnedCustomer = await Customer.findById(req.query.customerId)
            
            if(returnedCustomer){
                res.status(200).send(returnedCustomer)
            } else {
                res.status(404).json({
                    "message": "No customers found. Please create a customer"
                })
                winston.log({level: 'error', message: 'No customers found. Please create a customer'})
            }
            
        } else {
            const returnedCustomers = await Customer.find() 
            res.status(200).send(returnedCustomers)

            if(returnedCustomers.length === 0){
                res.status(404).json({
                    "message": "No customers found. Please create a customer"
                })
                winston.log({level: 'error', message: 'No customers found. Please create a customer'})
            }
        }
    } catch (error) {
        res.status(500).json({
            "message": `Internal server error. ${error}`
        })
        winston.log({level: "error", message: error})
    }
}
async function createCustomer (req, res) {
    try {
        let subscriptionName = ''
        let subscriptionId = ''
        let subscriptionCost = ''
        let subscriptionActiveStatus = ''
        let customer = {}
        await axios.get('http://localhost:5000/api/subscriptions?name=small_dog_treats&activeStatus=active', {
            auth: {
                username: 'admin',
                password: 'adminPassword'
            }
        })
        .then((response) => {
            response.data.forEach(subscription => {
                subscriptionName = subscription.name
                subscriptionId = subscription._id
                subscriptionCost = subscription.cost
                subscriptionActiveStatus = subscription.activeStatus
            })
            customer = new Customer({
                name: {
                    first: req.body.name.first,
                    last: req.body.name.last,
                },
                contactDetails:{
                    telephone: req.body.contactDetails.telephone,
                    email: req.body.contactDetails.email,
                    postcode: req.body.contactDetails.postcode
                },
                bankDetails: {
                    nameOnAccount: req.body.bankDetails.nameOnAccount,
                    accountNumber: req.body.bankDetails.accountNumber,
                    sortCode: req.body.bankDetails.sortCode
                },
                startDate: req.body.startDate,
                subscription: {
                    name: subscriptionName,
                    id: subscriptionId,
                    cost: subscriptionCost,
                    activeStatus: subscriptionActiveStatus,
                    level: req.body.subscription.level
                }

            })
        })
        .catch((error) => console.log(error))

        const validationErrors = await validationResult(customer)

        if(!validationErrors.isEmpty()){
            res.status(400).json({
                errors: validationErrors.array()
            })
            winston.log({level: 'error', message: validationErrors.array()})
        } else {
            await customer.save()    
            res.status(201).send(customer)
        }

    } catch (error) {
        winston.log({level: "error", message: error})
        res.status(500).json({
            "message": `Internal server error. ${error}`
        })
    }

}
async function updateCustomer (req, res) {
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

        const validationErrors = await validationResult(returnedCustomer)

        if(!validationErrors.isEmpty()){
            winston.log({level: 'error', message: validationErrors.array()}) 
            return res.status(400).json({
                errors: validationErrors.array()
            })
        } else {
            await returnedCustomer.save()
            res.status(200).send(returnedCustomer)
        }
        
    } catch(error) {
        winston.log({level: 'error', message: `No customer found with matching ID. ${error}`})
        res.status(404).json({
            "message": `No customer found with matching ID. ${error}`
        })
    }
}
async function deleteCustomer (req, res) {
    try {
        const returnedCustomer = await Customer.findByIdAndDelete(req.params.customerId)

        if(!returnedCustomer){
            winston.log({level: 'error', message: 'No customer found with matching ID'})
            res.status(404).json({
                "message": `No customer found with matching ID.`
            })
        } else {
            res.status(200).json({
                "message": `${returnedCustomer._id} has been successfully deleted`
            })
        }
    } catch (error) {
        winston.log({level: "error", message: error})

        res.status(400).json({
            "message": `Bad request. ${error}`
        })
        res.status(500).json({
            "message": `Internal server error. ${error}`
        })
    } 
}
module.exports = {
    getAllCustomers,
    createCustomer,
    updateCustomer,
    deleteCustomer
}