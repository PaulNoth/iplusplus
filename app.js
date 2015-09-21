var http = require('http');

http.createServer(function(request, response) {

    response.writeHead(200, {'Content-Type': 'text/plain'});

    response.end('index.html');
}).listen(8081);

console.log('Running on localhost:8081');