const SubscriptionSchema = require('../schemas/subscriptions')
const mongoose = require('mongoose')

const Router = require('express').Router

const SubscriptionController = new Router()
const Subscription = mongoose.model('subscriptions', SubscriptionSchema)

SubscriptionController.get('/', async(req, res, next) => {
    console.log('reached subscription controller')
    next()
})

SubscriptionController.post('/', async(req, res) => {
    try {
        const subscription = new Subscription({
            name: 'Small dogs'
        })
        subscription.save()
        res.send(subscription)
    } catch (error) {
        console.log(error)
    }
})
module.exports = SubscriptionController