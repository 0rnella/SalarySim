/* global describe beforeEach afterEach it */

import {expect} from 'chai'
import {setSalary, getSalary} from './salary'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('Salary thunk creators', () => {
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

  describe('getSalary', () => {
    it('eventually dispatches the SET SALARY action', async () => {
      const fakeSalary = 85000
      mockAxios.onGet('/api/salary').replyOnce(200, fakeSalary)
      await store.dispatch(getSalary())
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('SET_SALARY')
      expect(actions[0].salary).to.be.deep.equal(fakeSalary)
    })
  })

//   describe('setSalary', () => {
//     it('eventually dispatches the SET SALARY action', async () => {
//       const fakeSalary = 85000
//       mockAxios.onPost('/api/salary/', fakeSalary).replyOnce(201, fakeSalary)
//       await store.dispatch(setSalary(fakeSalary))
//       const actions = store.getActions()
//       expect(actions[0].type).to.be.equal('SET_SALARY')
//       expect(actions[0].salary).to.be.deep.equal(fakeSalary)
//     })
//   })
})
