
/* global describe beforeEach it */



const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')

const Product = db.model('product')

describe('Products routes', () => {

  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/products/', () => {

    beforeEach(() => {
      return Product.create({
        id: 1500,
        title: 'Moon Rock'
      })
    })

    it('GET /api/products/:id', () => {
      return request(app)
        .get('/api/products/1500')
        .expect(200)
        .then(res => {
          expect(res.body.categories).to.be.an('array')
          expect(res.body.title).to.equal('Moon Rock')
        })
    })
  }) // end describe('/api/categories')
}) // end describe('Category routes')
