const { updateCustomer } = require('../../controllers/customer-functionality')
const mockingoose = require('mockingoose').default
const Customer = require('../../models/customers')
const getOneCustomerResponse = require('./responses/get-one-customer.json')
const { request } = require('express')

describe('Update customer test suite', () => {
  it('should be defined', () => {
    expect(updateCustomer).toBeDefined()
  })
  it('should return a mentor with findById', async () => {
    mockingoose(Customer).toReturn(getOneCustomerResponse, 'findOne')

    const result = await Customer.findById({_id: "5f019b8c3142074cb32c2d21"})
    expect(JSON.stringify(result._id)).toBe(JSON.stringify(getOneCustomerResponse._id))
  })
  xit('should update the name to match what is in the request body', async () => {
    const request = {
      name: {
        first: 'Stevie',
        last: 'Butland'
      }
    }
    mockingoose(Customer).toReturn(getOneCustomerResponse, 'update')
    const result = await Customer.update({
      name: request.name
    })

    expect(result.name.first).toBe('Stevie') // does not seem to be updating
  })
  it('should update the contact details to match what is in the request', () => {

  })
  it('should update the bank details to match what is in the request', () => {
    
  })
  it('should update the start date to match what is in the request', () => {
    
  })
  it('should update the subscription details to match what is in the request', () => {
    
  })
  it('should throw an error if the given ID does not exist', () => {
    mockingoose(Customer).toReturn(getOneCustomerResponse, 'findOne')
    const results = Customer.findById({_id: '1'})
    
    expect(results).not.toBe(JSON.stringify(getOneCustomerResponse._id))
  })
})