var fs = require('fs');

const fastify = require('fastify')({
    logger: true
  })
  
  // Declare a route
  fastify.get('/api/test1', function (request, reply) {
    reply
    .code(200)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send({ hello: 'world1' })
  })
  fastify.get('/api/test2', function (request, reply) {
    reply
    .code(200)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send({ hello: 'world2' })
  })

  fastify.post('/api/test3', function (request, reply) {
      console.log(request);
    var obj = JSON.parse(fs.readFileSync('file.json', 'utf8'));
    reply
    .code(200)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send(obj)
  })
  // Run the server!
  fastify.listen(3001, function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    fastify.log.info(`server listening on ${address}`)
  })