const mongoose = require('mongoose')

const CustomerSchema = new mongoose.Schema({
    name: {
        first: String,
        last: String
    },
    contactDetails: {
        telephone: {
            type: String,
        }, 
        email: {
            type: String,
        },
        postcode: {
            type: String,
        }
    },
    bankDetails: {
        nameOnAccount: {
            type: String,
        }, 
        accountNumber: {
            type: Number,
        },
        sortCode: {
            type: Number,
        }
    },
    startDate: {
        type: String,
    },
    subscription: {
        name: {
            type: String,
        },
        level: {
            type: String,
            enum: ['standard', 'premium', 'deluxe']
        },
        id: {
            type: String,
        }, 
        activeStatus: {
            type: String,
            enum: ['active', 'cancelled']
        }
    }
})

module.exports = CustomerSchema