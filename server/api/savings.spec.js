/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const app = require('../index')

describe('Savings Goal routes', () => {

  describe('/api/savings/', () => {

    it('GET /api/savings/', async () => {
      const res = await request(app)
        .get('/api/savings/')
        .expect(200)

      expect(res.body).to.be.a('number')
    })

    // it('POST /api/savings/', async () => {
    //   const res = await request(app)
    //     .post('/api/salary/', {savingsGoal: 8000})
    //     .expect(200)

    //   expect(res.body).to.be.a('number')
    //   expect(res.body).to.equal(8000)
    // })
  }) // end describe('/api/savings/')
}) // end describe('Saving Goal routes')
