/*
Primary file for API
*/

// Deps
const http = require('http')

// server should respond to all requests with a string
const server = http.createServer((req, res) => {
  res.end('Hello, World\n')
})

// start the server!
server.listen(3000, function() {
  console.log('The server is listening on port 3000 now!')
})
