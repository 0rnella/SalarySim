/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const app = require('../index')

describe('Debts routes', () => {

  describe('/api/debts/', () => {

    it('GET /api/debts/', async () => {
      const res = await request(app)
        .get('/api/debts/')
        .expect(200)

      expect(res.body).to.be.an('array')
    })

  }) // end describe('/api/debts/')
}) // end describe('Debts routes')
