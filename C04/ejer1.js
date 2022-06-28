
var http        = require('http');
var url         = require('url');
var fs          = require('fs');
var nodemailer  =require('nodemailer');
var alimentos="";

//

//configuracion del correo
var transporter=nodemailer.createTransport ({
    service : 'gmail',
    auth : {
        user: 'majandra.ruiz97@gmail.com',
        pass: 'ctgoqbnoefrnsqpy'
    }
})

http.createServer(function (request, response) {
    let q= url.parse(request.url,true);
    let ruta= q.pathname;
    if(ruta=='/comida'){
        
        if(Object.keys(q.query).length !=1){
            response.writeHead(404, {'Content-Type': 'text/plain'});
            response.end('Ruta no encontrada (1) ');
            //response.end(JSON.stringify(comida));
        }else if(Object.keys(q.query)[0]!='nombre'){
            response.writeHead(404, {'Content-Type': 'text/plain'});
            response.end('Ruta no encontrada (2) ');
        }else{
            alimentos+=q.query.nombre+';';
            console.log(alimentos);
            response.writeHead(200, {'Content-Type': 'text/plain'});
            response.end('ok!');
        }
    }else if(ruta=='/fin'){
        var correo = {
            form: 'curso@node.cl',
            to: 'majandra.ruiz97@gmail.com',
            subject: 'lista de ingredientes',
            text: alimentos
        };
        //enviar correo
        transporter.sendMail(correo,function(err,info){
            if(err){
                console.log(err.message);
            }else{
                console.log('correo enviado'),
                console.log(info.response);
                alimentos="";
            }
        })
    }else{
     response.writeHead(404,{'Content-Type': 'text/plain'});
     response.write('Ruta no encontrada');
        
    }
  
}).listen(8093);
console.log('Server running at http://127.0.0.1:8093/');
// /comida?nombre=arroz