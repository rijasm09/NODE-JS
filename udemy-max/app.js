// FOR SERVER CREATION
const http = require('http')

const routes = require('./routes') //since it is not a global module we have to attach local path ./

const server = http.createServer(routes) //here it will execute function routes for incoming requests

server.listen(3000);


