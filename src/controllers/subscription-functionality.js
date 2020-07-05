const mongoose = require('mongoose')
const SubscriptionSchema = require('../schemas/subscriptions')
const Subscription = mongoose.model('subscriptions', SubscriptionSchema)

async function getAllSubscriptions (req, res) {
    try {
        const returnedSubscriptions = await Subscription.find()
        
        if(returnedSubscriptions.length === 0){
            res.status(404).json({
                "message": "No subscriptions found in the database"
            })
        } else {
            res.status(200).send(returnedSubscriptions)
        }
    } catch (error){
        res.status(500).json({
            "message": `Internal server error. ${error}`
        })
    }
}

async function createSubscriptions (req, res) {
    try {
        const subscription = new Subscription(req.body)
        subscription.save()
        res.status(201).send(subscription)

    } catch (error) {
        res.status(400).json({
            "message": "Bad request. Please try again"
        })
        res.status(500).json({
            "message": `Internal server error. ${error}`
        })
    }
}

module.exports = {
    getAllSubscriptions,
    createSubscriptions
}