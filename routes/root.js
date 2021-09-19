/**
 *
 * @route GET /
 * @param {Request} req
 * @param {Reply} reply
 */
module.exports = (req, reply) => {
  reply
    .code(200)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send({
      message: 'Welcome to the Fastify API',
    })
}
