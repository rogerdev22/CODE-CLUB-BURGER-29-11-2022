const express = require('express')
const  routes = require ('./routes' )

import './database'


class App {
      constructor() {
        this.app = express()

        this.middlewares()
        this.routes()
      }

      middlewares() {
          this.app.use(express.json())
      }
      routes() {
        this.app.use(routes)
      }
}
module.exports = routes;
module.exports= new App().app