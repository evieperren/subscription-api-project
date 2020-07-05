const mongoose = require('mongoose')
const validators = require('./validation')

const SubscriptionSchema = new mongoose.Schema({
    name: {
        type: String,
        validate: validators.validateString,
        required: true
    },
    cost: {
        standard: {
            type: Number,
            validate: validators.validateNumber,
            required: true

        },
        premium: {
            type: Number,
            validate: validators.validateNumber,
            required: true

        },
        deluxe: {
            type: Number,
            validate: validators.validateNumber,
            required: true
        }
    },
    startDate: {
        type: String,
        validate: validators.validateDate,
        required: true
    },
    activeStatus: {
        type: String,
        validate: validators.validateActiveStatus,
        required: true
    }
})

module.exports = SubscriptionSchema