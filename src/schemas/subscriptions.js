const mongoose = require('mongoose')
const validators = require('./validation')

const SubscriptionSchema = new mongoose.Schema({
    name: {
        type: String,
        validate: validators.string,
        required: true
    },
    cost: {
        standard: {
            type: String,
            validate: validators.cost,
            required: true
        },
        premium: {
            type: String,
            validate: validators.cost,
            required: true

        },
        deluxe: {
            type: String,
            validate: validators.cost,
            required: true
        }
    },
    startDate: {
        type: String,
        validate: validators.date,
        required: true
    },
    activeStatus: {
        type: String,
        enum: ['active', 'cancelled'],
        required: true
    }
})

module.exports = SubscriptionSchema