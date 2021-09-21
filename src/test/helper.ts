import { FastifyInstance } from 'fastify'
import Fastify from 'fastify'
import fp from 'fastify-plugin'
import App from '../app'

// Fill in this config with all the configurations
// needed for testing the application
function config() {
  return {}
}

// automatically build and tear down our instance
function build(t: any) {
  /**
   * @type {FastifyInstance}
   */
  const app: FastifyInstance = Fastify()

  // fastify-plugin ensures that all decorators
  // are exposed for testing purposes, this is
  // different from the production setup
  app.register(fp(App), config())

  // tear down our app after we are done
  t.teardown(app.close.bind(app))

  return app
}

const helper = {
  config,
  build,
}

export default helper
