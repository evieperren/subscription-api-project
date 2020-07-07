const Router = require('express').Router
const CustomerController = new Router()
const { getAllCustomers, createCustomer, updateCustomer, deleteCustomer } = require('./customer-functionality')
const expressValidation = require('./validation')
const roles = require('../utils/authentication')

CustomerController.use('/', (req, res, next) => {
    console.log('reached controllers')
    next()
})

CustomerController.get('/', roles.admin, async (req, res) => {
    getAllCustomers(req, res)
})

CustomerController.post('/', roles.all, expressValidation.post, async (req, res) => {
    createCustomer(req, res)
})

CustomerController.put('/:customerId', roles.all, expressValidation.post, async (req, res) => {
   updateCustomer(req, res) 
})

CustomerController.delete('/:customerId', roles.all,async (req, res) => {
    deleteCustomer(req, res)
})

module.exports = CustomerController