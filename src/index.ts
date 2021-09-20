import path from 'path'
import AutoLoad from 'fastify-autoload'

module.exports = async function (fastify: any, opts: any) {
  // Place here your custom code!

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts),
  })

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts),
  })
}
