var http = require('http');
var requests = 0;
var server = http.createServer(function (req, res) {
  console.log('got request = ' + ++requests);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('request (' + requests + '): 01234567890123456789');
});
console.log('basic http server running');
server.listen(12345);
