/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const app = require('../index')

describe('Salary routes', () => {

  describe('/api/salary/', () => {

    it('GET /api/salary/', async () => {
      const res = await request(app)
        .get('/api/salary/')
        .expect(200)

      expect(res.body).to.be.a('number')
      expect(res.body).to.be.greaterThan(0)
    })

    // it('POST /api/salary/', async () => {
    //   const res = await request(app)
    //     .post('/api/salary/', 80000)
    //     .expect(200)

    //   expect(res.body).to.be.a('number')
    //   expect(res.body).to.equal(80000)
    // })
  }) // end describe('/api/salary/')
}) // end describe('Salary routes')
