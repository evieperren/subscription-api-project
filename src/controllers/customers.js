const Router = require('express').Router
const CustomerController = new Router()
const { getAllCustomers, createCustomer, updateCustomer, deleteCustomer } = require('./customer-functionality')
const expressValidation = require('./validation')

CustomerController.use('/', (req, res, next) => {
    console.log('reached controllers')
    next()
})

CustomerController.get('/', async (req, res) => {
    getAllCustomers(req, res)
})

CustomerController.post('/', expressValidation.post, async (req, res) => {
    createCustomer(req, res)
})

CustomerController.put('/:customerId', expressValidation.post, async (req, res) => {
   updateCustomer(req, res) 
})

CustomerController.delete('/:customerId', async (req, res) => {
    deleteCustomer(req, res)
})

module.exports = CustomerController