const validators = {
    string: ((value) => {
        return /([A-Za-z]{2,30})\w+/.test(value)
    }),
    activeStatus: ((value) => {
        return /(active)|(cancelled)\w+/.test(value)
    }),
    subscriptionLevel: ((value) => {
        return /(standard)|(premium)|(deluxe)\w+/.test(value)
    }),
    telephone: ((value) => {
        return /([0-9]{9,11})\w+/.test(value)
    }),
    accountNumber: ((value) => {
        return /^[0-9]{8}$/.test(value)
    }),
    sortCode: ((value) => {
        return /^[0-9]{6}$/.test(value)
    }),
    date: ((value) => {
        return /([0-9]{2})\/([0-9]{2})\/([0-9]{4})/.test(value)
    }),
    number: ((value) => {
        return /([0-9])\w+/.test(value)
    }),
    cost: ((value) => {
        return /([0-9]{1,}).([0-9]{2})/.test(value)
    }),
    postcode: ((value) => {
        return /((^([a-zA-Z]){1,2})([0-9]{1,2})([a-zA-Z]{1})? ([0-9]{1})(([a-zA-Z]){2}))/.test(value)
    })
}

module.exports = validators