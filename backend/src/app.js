import express from 'express'
import cors from 'cors'
import {errors} from 'celebrate'

import routes from './routes'

class App {
  constructor () {
    this.server = express()

    // this.database()
    this.middlewares()
    this.routes()
  }

  // database () {
    // Config database
  // }

  middlewares () {
    this.server.use(cors())
    this.server.use(express.json())
    this.server.use(errors())
  }

  routes () {
    this.server.use(routes)
  }
}

export default new App().server
