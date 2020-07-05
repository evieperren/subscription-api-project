const mongoose = require('mongoose')
const validators = require('./validation')

const CustomerSchema = new mongoose.Schema({
    name: {
        first: {
            type: String,
            required: true,
            trim: true,
            validate: validators.validateString 
        },
        last: {
            type: String,
            required: true,
            trim: true,
            validate: validators.validateString
        }
    },
    contactDetails: {
        telephone: {
            type: String,
            required: true,
            trim: true,
            validate: validators.validateTelephone
        }, 
        email: {
            type: String,
            required: true,
            trim: true
        },
        postcode: {
            type: String,
            required: true,
            trim: true
        }
    },
    bankDetails: {
        nameOnAccount: {
            type: String,
            required: true,
            trim: true,
            validate: validators.validateString
        }, 
        accountNumber: {
            type: Number,
            required: true,
            trim: true,
            validate: validators.validateAccountNumber

        },
        sortCode: {
            type: Number,
            required: true,
            trim: true,
            validate: validators.validateSortCode
        }
    },
    startDate: {
        type: String,
        required: true,
        trim: true,
        validate: validators.validateDate
    },
    subscription: {
        name: {
            type: String,
            required: true,
            trim: true,
            validate: validators.validateString
        },
        level: {
            type: String,
            required: true,
            enum: ['standard', 'premium', 'deluxe'],
            trim: true,
            validator: validators.validateSubscriptionLevel
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
            validator: validators.validateActiveStatus
        }
    }
})

module.exports = CustomerSchema