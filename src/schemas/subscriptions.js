const mongoose = require('mongoose')

const SubscriptionSchema = new mongoose.Schema({
    name: String,
    cost: {
        standard: Number,
        premium: Number,
        deluxe: Number
    },
    startDate: String,
    activeStatus: String
})

module.exports = SubscriptionSchema