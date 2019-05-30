/* global describe beforeEach afterEach it */

import {expect} from 'chai'
import {getSavingsGoal} from './savings'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('Savings thunk creators', () => {
  let store
  let mockAxios

  const initialState = 80000

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
    store = mockStore(initialState)
  })

  afterEach(() => {
    mockAxios.restore()
    store.clearActions()
  })

  describe('getSavingsGoal', () => {
    it('eventually dispatches the SET_SAVINGS_GOAL action', async () => {
      const fakeSavingsGoal = 12000
      mockAxios.onGet('/api/savings').replyOnce(200, fakeSavingsGoal)
      await store.dispatch(getSavingsGoal())
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('SET_SAVINGS_GOAL')
      expect(actions[0].savingsGoal).to.be.deep.equal(fakeSavingsGoal)
    })
  })

})
