var http = require('http');
var url= require('url');

var fs= require('fs');

http.createServer(function (request, response) {
    let q= url.parse(request.url, true);
    let ruta=q.pathname;
    let datos={
        rut:q.query.rut,
        nombre:q.query.nombre,
        apellido:q.query.apellido
    }
    fs.writeFile('usuarios'+datos.rut+'.txt',JSON.stringify(datos),function(err){//guarda un archivo con cada peticion nueva
        if(err){
            console.log(err.message);
        }else{
            console.log('ok');
        }
    })
    if(ruta== '/usuario'){
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.end(JSON.stringify(datos));
    }else{
        response.writeHead(401, {'Content-Type': 'application/json'});
        response.end('ruta desconocida');
    }
 
}).listen(8091);

console.log('Server running at http://127.0.0.1:8091/');
//http://127.0.0.1:8091/usuario?rut=123&nombre=ale&apellido=ruiz