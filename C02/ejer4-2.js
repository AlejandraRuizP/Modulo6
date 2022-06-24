var http = require('http');
var url= require('url');


http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  let q=url.parse(request.url, true);
  let ruta=q.pathname;
  let partes= ruta.split('/');
  console.table(partes);
  console.table(ruta);
  response.end('Hello World');
}).listen(8082);

console.log('Server running at http://127.0.0.1:8082/');

//