const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')

describe('Category routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  it('GET /api/categories', () => {
    return request(app)
      .get('/api/categories')
      .expect(200)
      .then(res => {
        expect(res.body).to.be.an('array');
      })
  })
})
