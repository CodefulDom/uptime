/*
Primary file for API
*/

// Deps
const http = require('http')
const url = require('url')

const server = http.createServer(function(req, res) {
  let parsedURL = url.parse(req.url, true)
  let path = parsedURL.pathname
  let trimmedPath = path.replace(/^\/+|\/+$/g, '')

  res.end(`Request recieved on path: ${trimmedPath}\n`)
})

// start the server!
server.listen(3000, function() {
  console.log('The server is listening on port 3000 now!')
})
