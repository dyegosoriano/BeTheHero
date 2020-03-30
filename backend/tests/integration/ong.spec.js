const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback()
    await connection.migrate.latest()
  })

  afterAll(async () => {
    await connection.destroy()
  })

  it('should be able to create a new ONG', async () => {
    const reponse = await request(app)
      .post('/ongs')
      .send({
        name: 'ONG Teste',
        email: 'contato@apad.com.br',
        whatsapp: '1122334455',
        city: 'Rio Grande do Sul',
        uf: 'SC'
      })

    expect(reponse.body).toHaveProperty('id')
    expect(reponse.body.id).toHaveLength(8)
  })
})
