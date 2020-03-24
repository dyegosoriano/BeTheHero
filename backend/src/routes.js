const { Router } = require('express')

const OngController = require('./controllers/OngController')

const routes = new Router()

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)

module.exports = routes
