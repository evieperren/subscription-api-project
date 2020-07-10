jest.mock('express-validator')
jest.mock('express')
jest.mock('axios')
const { validationResult } = require('express-validator')
const { createCustomer } = require('../../controllers/customer-functionality')
const { response } = require('express')
const mockingoose  = require('mockingoose').default
const Customer = require('../../models/customers')
const requestCustomer = require('./requests/create-customer.json')
const responseCustomer = require('./responses/create-customer.json')
const requestCustomerNoName = require('./requests/create-customer-no-name.json')
const axios = require('axios')
const subscriptionResponse = require('../subscriptions/responses/name-and-active-subscriptions.json')
const Subscription = require('../../models/subscriptions')
const Subscriptions = require('../../models/subscriptions')

describe('Create customer test suite', () => {
  beforeEach(() => {
    validationResult.mockClear()
  })
  it('should be defined', () => {
    expect(createCustomer).toBeDefined()
  })
  it('should create a customer from the request body', async () => {
    mockingoose(Customer).toReturn(requestCustomer, 'save')
    const result = await Customer.create(requestCustomer)
    
    expect(result.name).toEqual(responseCustomer.name)
    expect(result.contactDetails).toEqual(responseCustomer.contactDetails)
    expect(result.bankDetails).toEqual(responseCustomer.bankDetails)
    expect(result.subscription).toEqual(responseCustomer.subscription)

  })
  it('should fail if a body is sent without name field completed', async () => {
    mockingoose(Customer).toReturn(requestCustomerNoName)
    const result = await Customer.create(requestCustomerNoName)
    expect(result).toThrow()

    // ValidationError: customers validation failed: name.last: Path `name.last` is required., name.first: Path `name.first` is required.
  })
  it('should throw an error if validation is failed', () => {
    validationResult.mockImplementation(() => {
      throw new Error
    })
    expect(validationResult).toThrow()
  })
  it('should throw 201 if validation has passed', () => {
    response.status.mockImplementation(() => { 
      return 201
    })
    expect(response.statusCode).toBe(201) // recieves 200
  })
  it('should do an axios call to subscription API', async () => {
    const data = await axios.get.mockReturnValue(subscriptionResponse)
    console.log(data)
    // mockingoose(Subscription).toReturn(subscriptionResponse)
    // Subscription.find({})
    // expect(JSON.stringify(data)).toBe(JSON.stringify(subscriptionResponse))
  })
})