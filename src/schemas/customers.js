const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    name: {
        first: {
            type: String,
            required: true
        },
        last: {
            type: String,
            required: true
        }
    },
    contactDetails: {
        telephone: {
            type: String,
            required: true
        }, 
        email: {
            type: String,
            required: true
        },
        postcode: {
            type: String,
            required: true
        }
    },
    bankDetails: {
        nameOnAccount: {
            type: String,
            required: true
        }, 
        accountNumber: {
            type: Number,
            required: true
        },
        sortCode: {
            type: Number,
            required: true 
        }
    },
    startDate: {
        type: String,
        required: true
    },
    subscription: {
        name: {
            type: String,
            required: true
        },
        level: {
            type: String,
            required: true,
            enum: ['standard', 'premium', 'deluxe']
        },
        id: {
            type: String,
            required: true
        }, 
        activeStatus: {
            type: String,
            required: true,
            enum: ['active', 'cancelled']
        }
    }
})

module.export = customerSchema