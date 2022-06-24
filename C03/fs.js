//carga del modulo file sistem
var fs=require('fs');

//leemos un archivo
//err: mensaje de arror(en caso de que suceda al leer el archivo);
fs.readFile('ejemplo.txt',  function(err,data){
    if(err){
        console.log(err.message);
    }else{
        console.log(data.toString());
    }
   
});

//sobreescribir un archivo
fs.writeFile('ejemplo2.txt','texto de ejemplo',function(err){
    if(err){
        console.log(err.message);
    }else{
        console.log('ok');
    }
})

//agregar contenido--agrega contenidop a un archivo ya existente
fs.appendFile('ejemplo3.txt','\notro texto de ejemplo1',function(err){
    if(err){
        console.log(err.message);
    }else{
        console.log('ok');
    }
})

//abrir archivo
fs.open('ejemplo4.txt','w',function(err,fd){
    if(err){
        console.log(err.message);
    }else{
        console.log('archivo abierto');
    }
})

//eliminar archivo
fs.unlink('delete.txt',function(err){
    if(err){
        console.log(err.message);
    }else{
        console.log('archivo eliminado');
    }
})

//renombrar un archivo--en caso de renombrar con el nombre de un archivo existente eliminará el archivo existente y lo suplantara por el archivo renombrado
fs.rename('antiguo.txt','nuevo.txt',function(err){
    if(err){
        console.log(err.message);
    }else{
        console.log('Archivo renombrado con exito');
    }
})