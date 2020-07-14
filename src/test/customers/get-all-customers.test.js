jest.mock("../../controllers/customer-functionality")
const { getAllCustomers } = require('../../controllers/customer-functionality')
const getAllCustomersResponse = require('./responses/get-all-customers.json')
const getOneCustomerResponse = require('./responses/get-one-customer.json')
const mockingoose = require('mockingoose').default
const Customer = require('../../models/customers')

describe('Get all customers test suite', () => {
  const response = jest.fn()

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
  it('should fail with incorrect id passed into findById', async () => {
    mockingoose(Customer).toReturn(getOneCustomerResponse, 'findOne')
    const result = await Customer.findById({_id: '5678'})
    expect((result._id)).not.toBe(getOneCustomerResponse._id);
  })
  it('should throw an error if no customer is returned', () => { // does not work
    getAllCustomers.mockImplementation(() => {
      throw new Error()
    })
    expect(getAllCustomers()).toThrow('No mentors have been returned')
  })
  it('should return 200 response if customer is returned', async () => {
    response.mockImplementation(() => {return 200})
    expect(response).toBe(200); // does not work

  })
})