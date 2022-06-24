var http= require('http');
var url=require('url');

var http = require('http');
http.createServer(function (request, response) {
    
    let q= url.parse(request.url, true);
    //let p= q.query;
    let ruta= q.pathname;
    //let h= q.host;
    if(ruta == '/login'){
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write('la ruta es '+ ruta);  
        response.end();
    }else{
        response.writeHead(400, {'Content-Type': 'text/plain'});
        
    }
    
}).listen(8083);

console.log('Server running at http://127.0.0.1:8083/');