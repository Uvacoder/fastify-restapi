import { join } from 'path'
import AutoLoad, { AutoloadPluginOptions } from 'fastify-autoload'
import { FastifyPluginAsync } from 'fastify'

export type AppOptions = {} & Partial<AutoloadPluginOptions>

const app: FastifyPluginAsync<AppOptions> = async function (
  fastify: any,
  opts: any,
): Promise<void> {
  void fastify.register(AutoLoad, {
    dir: join(__dirname, 'plugins'),
    options: Object.assign({}, opts),
  })

  void fastify.register(AutoLoad, {
    dir: join(__dirname, 'routes'),
    options: Object.assign({}, opts),
  })
}

export default app
export { app }
