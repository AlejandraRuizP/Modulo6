//carga del módulo http
var http=require('http');

//request:peticion que llega desde el cliente
//response:la reserva que envío desde el server al cliente
http.createServer(function(request,response){
    response.writeHead(200,{'Content-type': 'text/html'})//content type especifica el tipo de texto que leera el servisdor
    response.write("Hola");
    response.write("<br> <h1>Festival</h1>");
    let ruta=request.url;
    response.write("la ruta es: "+ ruta);
    response.end();
}).listen(8081);
console.log('servidor iniciado');
//ctrl+c:finaliza ejecición del servidor