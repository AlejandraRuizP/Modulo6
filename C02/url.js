var http = require('http');
var url= require('url');

http.createServer(function (request, response) {
    //cargar la url en q
    let q=url.parse(request.url,true);
    //cargar los parametros de la url en un objeto.
    let parametros= q.query;
    //cargar la ruta
    let ruta= q.pathname;
    //cargar el host
    let host=q.host;
    //trae parametros de la url
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("el parametro id es: "+parametros.id);
    response.write("\nel parametro ciudad es: "+parametros.ciudad);
    response.write("\nla ruta es: "+ ruta);
    response.write("\nel servidor es: "+ host);
    response.end('\nHello World');
}).listen(8082);

console.log('Server running at http://127.0.0.1:8082/');

