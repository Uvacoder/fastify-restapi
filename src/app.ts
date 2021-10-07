import { join } from 'path'
import AutoLoad, { AutoloadPluginOptions } from 'fastify-autoload'
import { FastifyInstance, FastifyPluginAsync } from 'fastify'

export type AppOptions = {} & Partial<AutoloadPluginOptions>

const app: FastifyPluginAsync<AppOptions> = async function (
  fastify: FastifyInstance,
  opts: Partial<AutoloadPluginOptions>,
): Promise<void> {
  void fastify.register(AutoLoad, {
    dir: join(__dirname, 'plugins'),
    options: Object.assign({}, opts),
  })

  void fastify.register(AutoLoad, {
    dir: join(__dirname, 'router'),
    options: Object.assign({}, opts),
  })
}

export default app
export { app }
