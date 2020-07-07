const { getAllSubscriptions, createSubscriptions } = require('./subscription-functionality')
const expressValidation = require('./validation')
const winston = require('winston')
const Router = require('express').Router
const SubscriptionController = new Router()
const roles = require('../utils/authentication')

SubscriptionController.use('/', (req, res, next) => {
    console.log('reached subscription controllers')
    next()
})
SubscriptionController.get('/', roles.admin,async (req, res) => {
    getAllSubscriptions(req, res)
})
SubscriptionController.post('/', roles.admin, expressValidation.postSubscription, async (req, res) => {
    createSubscriptions(req, res)
})
module.exports = SubscriptionController