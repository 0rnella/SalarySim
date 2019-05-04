/* global describe beforeEach afterEach it */

import {expect} from 'chai'
import {fetchExpenses} from './expenses'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('Expenses thunk creators', () => {
  let store
  let mockAxios

  const initialState = {}

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
    store = mockStore(initialState)
  })

  afterEach(() => {
    mockAxios.restore()
    store.clearActions()
  })

  describe('fetchExpenses', () => {
    it('eventually dispatches the UPDATE EXPENSES action', async () => {
      const fakeExpenses = {
        Rent: 1000,
        Food: 300,
        'Fun money': 50,
        'Fitness/vacation/education': 100,
        'Clothing/home': 10,
        Transportation: 20,
        'Bills (home, phone)': 100
      }
      mockAxios.onGet('/api/expenses').replyOnce(200, fakeExpenses)
      await store.dispatch(fetchExpenses())
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('UPDATE_EXPENSES')
      expect(actions[0].expenses).to.be.deep.equal(fakeExpenses)
    })
  })

})
