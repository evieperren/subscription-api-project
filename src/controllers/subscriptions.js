const { getAllSubscriptions, createSubscriptions } = require('./subscription-functionality')
const expressValidation = require('./validation')
const winston = require('winston')
const Router = require('express').Router
const SubscriptionController = new Router()

SubscriptionController.use('/', (req, res, next) => {
    console.log('reached subscription controllers')
    next()
})
SubscriptionController.get('/', async (req, res) => {
    getAllSubscriptions(req, res)
})

SubscriptionController.post('/', expressValidation.postSubscription, async (req, res) => {
    createSubscriptions(req, res)
})
module.exports = SubscriptionController