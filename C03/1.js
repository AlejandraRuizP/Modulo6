//crear servidor
var http = require('http');
var url=require('url');
var fs= require('fs');
 var exito= fs.readFileSync('1.html');
 var fail= fs.readFileSync('2.html');
http.createServer(function (request, response) {
    let q= url.parse(request.url, true);
    let ruta= q.pathname;
        if(ruta== '/datos'){
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(exito);
    }else{
        response.writeHead(401, {'Content-Type': 'text/html'});
        response.end(fail);
    }
  
}).listen(8090);

console.log('Server running at http://127.0.0.1:8090/');
