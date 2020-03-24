const { Router } = require('express')

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')

const routes = new Router()

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)

routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete)

module.exports = routes
