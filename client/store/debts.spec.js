/* global describe beforeEach afterEach it */

import {expect} from 'chai'
import {setDebtToPost, fetchDebtsList} from './debts'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('Debts thunk creators', () => {
  let store
  let mockAxios

  const initialState = {
    debtToPost: {
      debtType: 'Grace Hopper Program',
      amount: 16910,
      timeline: 9
    },
    debtsList: [],
  }

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
    store = mockStore(initialState)
  })

  afterEach(() => {
    mockAxios.restore()
    store.clearActions()
  })

  describe('fetchDebtsList', () => {
    it('eventually dispatches the UPDATE DEBTS LIST action', async () => {
      const fakeDebtsList = [{
        debtType: 'Grace Hopper Program',
        amount: 16910,
        timeline: 9
      }, {
        debtType: 'Family',
        amount: 5000,
        timeline: 12
      }]
      mockAxios.onGet('/api/debts').replyOnce(200, fakeDebtsList)
      await store.dispatch(fetchDebtsList())
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('UPDATE_DEBTS_LIST')
      expect(actions[0].debtsList).to.be.deep.equal(fakeDebtsList)
    })
  })

  describe('setDebtToPost', () => {
      it('eventually dispatches the SET DEBT TO POST action', async () => {
          const fakeDebtToPost = {
            debtType: 'Student Loan',
            amount: 6460,
            timeline: 13
          }
          await store.dispatch(setDebtToPost(fakeDebtToPost))
          const actions = store.getActions()
          expect(actions[0].type).to.be.equal('SET_DEBT_TO_POST')
      })
  })
})
