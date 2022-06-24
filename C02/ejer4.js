var http = require('http');
var url= require('url');

function cuadrado(numero){
  return numero * numero;
}
http.createServer(function (request, response) {

  response.writeHead(200, {'Content-Type': 'text/plain'});
  let q= url.parse(request.url, true);
  let ruta= q.pathname;
  
  if(ruta){
    let parametros= q.query;
    if(parametros.numero == 2){
        response.write('Resultado: '+ (2 * 2));
        //response.write('Resultado: '+ cuadrado(parametros.numero));
    }else{
        response.write('\nNOT FOUND');
    }
    response.write('\nruta ok: '+ ruta);
  }
  response.end();
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');