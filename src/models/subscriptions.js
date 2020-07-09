const mongoose = require('mongoose')
const SubscriptionSchema = require('../schemas/subscriptions')

const Subscriptions = mongoose.model('subscriptions', SubscriptionSchema)

module.exports = Subscriptions