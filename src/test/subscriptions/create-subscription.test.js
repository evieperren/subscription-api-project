const { createSubscriptions } = require('../../controllers/subscription-functionality')
const Subscription = require('../../models/subscriptions')
const mockingoose = require('mockingoose').default
const response = require('./responses/create-subscription.json')
const request = require('./requests/create-subscription.json')

describe('Create a subscription test suite', () => {
  it('should be defined', () => {
    expect(createSubscriptions).toBeDefined()
  })
  it('should create a subscription from the request', async () => {
    mockingoose(Subscription).toReturn(response, 'save')
    const results = await Subscription.create({
      cost: {
        standard: "5.00",
        premium: "10.00",
        deluxe: "15.00"
      },
      name: "small_dog_treats",
      startDate: "01/01/2019",
      activeStatus: "active" 
    }) 
    expect(results.name).toBe(request.name)
    expect(results.cost).toEqual(request.cost)
    expect(results.startDate).toBe(request.startDate)
    expect(results.activeStatus).toBe(request.activeStatus)
  })
  it('should throw an error if body is not passed', () => {
    // not sure how to do this
  })
})