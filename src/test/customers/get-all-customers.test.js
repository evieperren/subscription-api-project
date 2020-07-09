jest.mock("../../controllers/customer-functionality")
const { getAllCustomers } = require('../../controllers/customer-functionality')
const getAllCustomersResponse = require('./responses/getAllCustomers.json')
const getOneCustomerResponse = require('./responses/getOneCustomer.json')
const mockingoose = require('mockingoose').default

const Customer = require('../../models/customers')

describe('Get all customers test suite', () => {
  beforeEach(() => {
    mockingoose.resetAll();
    mockingoose(Customer).reset(); 
    jest.clearAllMocks();
    getAllCustomers.mockClear()
  })
  it('should be defined', () => {
    expect(getAllCustomers).toBeDefined()
  })
  it('should return all customers', () => {
    getAllCustomers.mockImplementation(() => {
      return getAllCustomersResponse
    })
    expect(getAllCustomers()).toHaveLength(6)
  })
  it('should return one customer by findById', async () => {
    mockingoose(Customer).toReturn(getOneCustomerResponse, 'findOne')
    
    const result =  await Customer.findById({_id: '5f019b8c3142074cb32c2d21'})
    expect(JSON.stringify(result._id)).toBe(JSON.stringify(getOneCustomerResponse._id))
      
  })
  it('should fail with incorrect id passed into findById', () => {
    mockingoose(Customer).toReturn(getOneCustomerResponse, 'findOne')
    
    const result = Customer.findById({_id: '5678'})
    expect(JSON.stringify(result._id)).not.toBe(JSON.stringify(getOneCustomerResponse._id));
  })
  it('should throw an error if no customer is returned', () => { // does not work
    getAllCustomers.mockImplementation(() => {
      throw new Error()
    })
    expect(getAllCustomers()).toThrow(new Error('No mentors have been returned'))
  })
  it('should return 200 response if customer is returned', () => {
    // not sure how to do this one
  })
})