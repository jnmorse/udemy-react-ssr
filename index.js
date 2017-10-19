const server = require('./server')

const PORT = process.env.PORT || 3000

server.listen(PORT, (error) => {
  if (error) {
    // eslint-disable-next-line no-console
    console.error(error.message)
  }

  // eslint-disable-next-line no-console
  console.log(`Listening on port: ${PORT}`)
})
