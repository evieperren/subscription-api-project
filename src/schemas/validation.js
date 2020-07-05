const validators = {
    validateString: ((value) => {
        return /([A-Z])\w+/.test(value)
    }),
    validateActiveStatus: ((value) => {
        return /(active)|(cancelled)\w+/.test(value)
    }),
    validateSubscriptionLevel: ((value) => {
        return /(standard)|(premium)|(deluxe)\w+/.test(value)
    }),
    validateTelephone: ((value) => {
        return /([0-9]{9,11})\w+/.test(value)
    }),
    validateAccountNumber: ((value) => {
        return /([0-9]{8})\w+/.test(value)
    }),
    validateSortCode: ((value) => {
        return /([0-9]{6})\w+/.test(value)
    }),
    validateDate: ((value) => {
        return /([0-9]{2})\/([0-9]{2})\/([0-9]{4})/.test(value)
    }),
    validateNumber: ((value) => {
        return /([0-9])\w+/.test(value)
    })
}

module.exports = validators