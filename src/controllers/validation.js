const { check } = require("express-validator")

const expressValidation = {
    post: [
        check('name.first')
            .isString().withMessage('Please enter string characters online')
            .isLength({min: 2, max: 30}).withMessage('Please enter a string between 2 and 30 characters')
            .matches(/([A-Za-z])\w+/).withMessage('Please enter string characters online')
            .trim(),
        check('name.last')
            .isString().withMessage('Please enter string characters online')
            .isLength({min: 2, max: 30}).withMessage('Please enter a string between 2 and 30 characters')
            .matches(/([A-Za-z])\w+/).withMessage('Please enter string characters online')
            .trim(),
        check('contactDetails.telephone')
            .isNumeric().withMessage('Please only enter numeric values')
            .isLength({min: 9, max: 11}).withMessage('Please enter a telephone number between 9 and 11 characters')
            .matches(/([0-9]{9,11})\w+/).withMessage('Please enter a valid telephone number')
            .trim(),
        check('contactDetails.email')
            .isEmail().withMessage('Please enter a valid email')
            .normalizeEmail({all_lowercase: true})
            .trim(),
        check('contactDetails.postcode')
            .isString().withMessage('Please enter a valid postcode')
            .matches(/((^([a-zA-Z]){1,2})([0-9]{1,2})([a-zA-Z]{1})? ([0-9]{1})(([a-zA-Z]){2}))/).withMessage('Please enter a valid postcode')
            .trim(),
        check('bankDetails.nameOnAccount')
            .isString().withMessage('Please enter a valid name')
            .isLength({min: 2, max: 30}).withMessage('Please enter a string between 2 and 30 characters')
            .matches(/([A-Za-z])\w+/).withMessage('Please enter a valid name'),
        check('bankDetails.accountNumber')
            .isNumeric().withMessage('Please enter a valid account number')
            .isLength({min: 8, max: 8}).withMessage('Please enter 8 values')
            .matches(/^[0-9]{8}$/).withMessage('Please enter a valid account number'),
        check('bankDetails.sortCode')
            .isNumeric().withMessage('Please enter a valid sort code')
            .isLength({min: 6, max: 6}).withMessage('Please enter 6 values')
            .matches(/^[0-9]{6}$/).withMessage('Please enter a valid account number'),
        check('startDate')
            .isString().withMessage('Please enter a valid date')
            .matches(/([0-9]{2})\/([0-9]{2})\/([0-9]{4})/).withMessage('Please enter a valid date in DD/MM/YYYY format'),
        check('subscription.name')
            .isString().withMessage('Please enter a string')
            .isLength({min: 2, max: 30}).withMessage('Please enter a string between 2 and 30 characters')
            .matches(/([A-Za-z])\w+/).withMessage('Please enter string characters online')
            .trim(),
        check('subscription.level')
            .isString().withMessage('Please enter a valid level')
            .isIn(['standard', 'premium', 'deluxe'])
            .trim(),
        check('subscription.id')
            .isString().withMessage('Please enter a valid ID')
            .trim(),
        check('subscription.activeStatus')
            .isString().withMessage('Please enter a valid active status')
            .isIn(['active', 'cancelled'])
            .trim()
    ],
    put: [
        check('name.first')
            .isString().withMessage('Please enter string characters online')
            .isLength({min: 2, max: 30}).withMessage('Please enter a string between 2 and 30 characters')
            .matches(/([A-Za-z])\w+/).withMessage('Please enter string characters online')
            .optional({ checkFalsy:true })
            .trim(),
        check('name.last')
            .isString().withMessage('Please enter string characters online')
            .isLength({min: 2, max: 30}).withMessage('Please enter a string between 2 and 30 characters')
            .matches(/([A-Za-z])\w+/).withMessage('Please enter string characters online')
            .optional({ checkFalsy:true })
            .trim(),
        check('contactDetails.telephone')
            .isNumeric().withMessage('Please only enter numeric values')
            .isLength({min: 9, max: 11}).withMessage('Please enter a telephone number between 9 and 11 characters')
            .matches(/([0-9]{9,11})\w+/).withMessage('Please enter a valid telephone number')
            .optional({ checkFalsy:true })
            .trim(),
        check('contactDetails.email')
            .isEmail().withMessage('Please enter a valid email')
            .normalizeEmail({all_lowercase: true})
            .optional({ checkFalsy:true })
            .trim(),
        check('contactDetails.postcode')
            .isString().withMessage('Please enter a valid postcode')
            .matches(/((^([a-zA-Z]){1,2})([0-9]{1,2})([a-zA-Z]{1})? ([0-9]{1})(([a-zA-Z]){2}))/).withMessage('Please enter a valid postcode')
            .optional({ checkFalsy:true })
            .trim(),
        check('bankDetails.nameOnAccount')
            .isString().withMessage('Please enter a valid name')
            .isLength({min: 2, max: 30}).withMessage('Please enter a string between 2 and 30 characters')
            .matches(/([A-Za-z])\w+/).withMessage('Please enter a valid name')
            .optional({ checkFalsy:true }),
        check('bankDetails.accountNumber')
            .isNumeric().withMessage('Please enter a valid account number')
            .isLength({min: 8, max: 8}).withMessage('Please enter 8 values')
            .matches(/^[0-9]{8}$/).withMessage('Please enter a valid account number')
            .optional({ checkFalsy:true }),
        check('bankDetails.sortCode')
            .isNumeric().withMessage('Please enter a valid sort code')
            .isLength({min: 6, max: 6}).withMessage('Please enter 6 values')
            .matches(/^[0-9]{6}$/).withMessage('Please enter a valid account number')
            .optional({ checkFalsy:true }),
        check('startDate')
            .isString().withMessage('Please enter a valid date')
            .matches(/([0-9]{2})\/([0-9]{2})\/([0-9]{4})/).withMessage('Please enter a valid date in DD/MM/YYYY format')
            .optional({ checkFalsy:true }),
        check('subscription.name')
            .isString().withMessage('Please enter a string')
            .isLength({min: 2, max: 30}).withMessage('Please enter a string between 2 and 30 characters')
            .matches(/([A-Za-z])\w+/).withMessage('Please enter string characters online')
            .optional({ checkFalsy:true })
            .trim(),
        check('subscription.level')
            .isString().withMessage('Please enter a valid level')
            .isIn(['standard', 'premium', 'deluxe'])
            .optional({ checkFalsy:true })
            .trim(),
        check('subscription.id')
            .isString().withMessage('Please enter a valid ID')
            .optional({ checkFalsy:true })
            .trim(),
        check('subscription.activeStatus')
            .isString().withMessage('Please enter a valid active status')
            .isIn(['active', 'cancelled'])
            .optional({ checkFalsy:true })
            .trim()
    ],
    postSubscription: [
        check('name')
            .isString().withMessage('Please enter string characters online')
            .isLength({min: 2, max: 30}).withMessage('Please enter a string between 2 and 30 characters')
            .matches(/([A-Za-z])\w+/).withMessage('Please enter string characters online')
            .trim(), 
        check('cost.standard')
            .isString().withMessage('Please enter a string value containing cost')
            .matches(/([0-9]{1,}).([0-9]{2})/).withMessage('Please enter a valid cost')
            .trim(),
        check('cost.premium')
            .isString().withMessage('Please enter a string value containing cost')
            .matches(/([0-9]{1,}).([0-9]{2})/).withMessage('Please enter a valid cost')
            .trim(),
        check('cost.deluxe')
            .isString().withMessage('Please enter a string value containing cost')
            .matches(/([0-9]{1,}).([0-9]{2})/).withMessage('Please enter a valid cost')
            .trim(),
        check('startDate')
            .isString().withMessage('Please enter a valid date')
            .matches(/([0-9]{2})\/([0-9]{2})\/([0-9]{4})/).withMessage('Please enter a valid date in DD/MM/YYYY format'),
        check('activeStatus')
            .isString().withMessage('Please enter a valid active status')
            .isIn(['active', 'cancelled'])
    ]
}

module.exports = expressValidation