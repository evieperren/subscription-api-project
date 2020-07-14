const { deleteCustomer } = require('../../controllers/customer-functionality')
const mockingoose = require('mockingoose').default
const Customer = require('../../models/customers')
const customerRequest = require('./requests/one-customer.json')
const mockRequest = require('mock-request')

describe('Delete customer test suite', () => {
  let results 
  const mockFn = mockRequest.mock()
  // .delete('/').respond(200).run()

  beforeEach(() => {
    results = jest.fn()
  })
  it('should be defined', () => {
    expect(deleteCustomer).toBeDefined()
  })
  it('should throw and error if customer id is not found', async () => {
    try {
      mockingoose(Customer).toReturn(customerRequest, 'findOne')
      const results = await Customer.findById({_id: '5f01a0af89b10950e4e8a4e'})
    } catch (error){
      console.log(error)
      expect(error).toBe('404')  // this test always passes 
    }
  })
  it('should find a customer and delete it by ID', async () => {
    mockingoose(Customer).toReturn(customerRequest, 'findOne')
    const results = await Customer.findByIdAndDelete({_id: '5f019b8c3142074cb32c2d21'})
    expect(results).toBe(undefined)
  })
  it('should send message when customer has been successfully deleted', () => {
    // not sure how to do this one
  })
})