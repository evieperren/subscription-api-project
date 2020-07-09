jest.mock('../../controllers/subscription-functionality')
const { getAllSubscriptions } = require('../../controllers/subscription-functionality')
const mockingoose = require('mockingoose').default
const Subscriptions = require('../../models/subscriptions')
const getAllSubscriptionsResponse = require('./responses/get-all-subscriptions.json')

describe('Get all subscriptions test suite', () => {
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
})