// const microserviceCore = require('@thrivelearning/microservice-core')

const routes = require('./routes')
const fastifyApp = require('./fastify-app')
const {local} = require('../commons/logger')

const logger = local()

const start = async () => {
  const app = routes(fastifyApp())
  const port = 5010

  const started = await app.listen(port, '0.0.0.0')
  logger.info(`HTTP API - ${started}`)
}

start()
