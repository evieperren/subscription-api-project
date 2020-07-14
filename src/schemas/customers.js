const mongoose = require('mongoose')
const validators = require('./validation')

const CustomerSchema = new mongoose.Schema({
    name: {
        first: {
            type: String,
            required: true,
            trim: true,
            validate: validators.string 
        },
        last: {
            type: String,
            required: true,
            trim: true,
            validate: validators.string
        }
    },
    contactDetails: {
        telephone: {
            type: String,
            required: true,
            trim: true,
            validate: validators.telephone
        }, 
        email: {
            type: String,
            required: true,
            trim: true
        },
        postcode: {
            type: String,
            required: true,
            trim: true,
            validate: validators.postcode
        }
    },
    bankDetails: {
        nameOnAccount: {
            type: String,
            required: true,
            trim: true,
            validate: validators.string
        }, 
        accountNumber: {
            type: Number,
            required: true,
            trim: true,
            validate: validators.accountNumber
        },
        sortCode: {
            type: Number,
            required: true,
            trim: true,
            validate: validators.sortCode
        }
    },
    startDate: {
        type: String,
        required: true,
        trim: true,
        validate: validators.date
    },
    subscription: {
        name: {
            type: String,
            required: true,
            trim: true,
            validate: validators.string
        },
        level: {
            type: String,
            required: true,
            enum: ['standard', 'premium', 'deluxe'],
            trim: true,
            validator: validators.subscriptionLevel
        },
        id: {
            type: String,
            required: true,
            trim: true
        }, 
        activeStatus: {
            type: String,
            required: true,
            enum: ['active', 'cancelled'],
            trim: true,
        }
    }
})

module.exports = CustomerSchema