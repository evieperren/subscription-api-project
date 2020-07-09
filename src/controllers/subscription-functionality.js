const { validationResult } = require('express-validator')
const winston = require('winston')
const Subscription = require('../models/subscriptions')

async function getAllSubscriptions (req, res) {
    try {
        const returnedSubscriptions = await Subscription.find()

        if(req.query.name && req.query.activeStatus){
            const subscriptions = await Subscription.find({name: req.query.name,activeStatus: req.query.activeStatus})
            res.send(subscriptions)

        } else if (returnedSubscriptions.length === 0) {
            res.status(404).json({
                "message": "No subscriptions found in the database"
            })
            winston.log({level: 'error', message: 'No subscriptions found in the database'})
        } else {
            res.status(200).send(returnedSubscriptions)
        }
    } catch (error){
        winston.log({level: 'error', message: `Internal server error. ${error}`})
        res.status(500).json({
            "message": `Internal server error. ${error}`
        })
    }
}

async function createSubscriptions (req, res) {
    const subscription = new Subscription(req.body)

    try {
        const validationErrors = await validationResult(subscription)
        if(!validationErrors.isEmpty()){
            res.status(400).json({
                errors: validationErrors.array()
            })
            winston.log({level: 'error', message: validationErrors.array()})
        } else {
            await subscription.save()
            res.status(201).send(subscription)
        }

    } catch (error) {
        res.status(500).json({
            "message": `Internal server error. ${error}`
        })
        winston.log({level: "error", message: error})
    }
}

module.exports = {
    getAllSubscriptions,
    createSubscriptions
}