/**
 *
 * @route GET /photos
 * @param {Request} req
 * @param {Reply} reply
 */
module.exports = (req, reply) => {
  reply.send({
    message: 'Hello from the photos route',
  })
}
