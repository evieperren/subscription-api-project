const { createCustomer } = require('../../controllers/customer-functionality')
const mockingoose  = require('mockingoose').default
const Customer = require('../../models/customers')
const requestCustomer = require('./requests/create-customer.json')
const responseCustomer = require('./responses/create-customer.json')
const requestCustomerNoName = require('./requests/create-customer-no-name.json')

describe('Create customer test suite', () => {
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
})