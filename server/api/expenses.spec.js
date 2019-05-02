/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const app = require('../index')

describe('Expenses routes', () => {

  describe('/api/expenses/', () => {

    it('GET /api/expenses/', async () => {
      const res = await request(app)
        .get('/api/expenses/')
        .expect(200)

      expect(res.body).to.be.an('object')
      expect(Object.values(res.body)[0]).to.be.a('number')
    })

  }) // end describe('/api/expenses/')
}) // end describe('Expenses routes')
