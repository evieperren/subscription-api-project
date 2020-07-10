jest.mock('../../controllers/subscription-functionality')
const { getAllSubscriptions } = require('../../controllers/subscription-functionality')
const mockingoose = require('mockingoose').default
const Subscriptions = require('../../models/subscriptions')
const getAllSubscriptionsResponse = require('./responses/get-all-subscriptions.json')
const nameAndActiveResponse = require('./responses/name-and-active-subscriptions.json')

describe('Get all subscriptions test suite', () => {
  beforeEach(() => {
    getAllSubscriptions.mockReset()
  })
  it('should be defined', () => {
    expect(getAllSubscriptions).toBeDefined
  })
  it('should return all subscriptions', async () => {
    getAllSubscriptions.mockImplementation(() => {
      return getAllSubscriptionsResponse
    })
    expect(getAllSubscriptions().length).toBe(4)
  })
  it('should throw an error when there are no subscriptions', () => {
    getAllSubscriptions.mockImplementation(() => {
      throw new Error()
    })
    expect(getAllSubscriptions()).toThrow() // does not work
  })
  it('should return subscriptions that have active status and a name', async () => {
    mockingoose(Subscriptions).toReturn(nameAndActiveResponse)
    const results = await Subscriptions.find({name: 'small_dog_treats', activeStatus: 'active'})
    expect(results.length).toBe(4)
  })
})