const mongoose = require('mongoose')
const customerSchema = require('../schemas/customers')

const Customer = mongoose.model('customers', customerSchema)

module.exports = Customer