//auoaytbkfcgwtciz

//cargar nodemailer
var nodemailer= require('nodemailer');
//configuracion
var transporter= nodemailer.createTransport({
    service:'gmail',
    auth: {
        user:'majandra.ruiz97@gmail.com',
        pass: 'auoaytbkfcgwtciz'
    }
});

//construir el mensaje del correo
var mailOptions= {
    from: 'cursonode@plataforma5.cl',
    to:'jd.petitdiaz@gmail.com',
    subject: 'saludos desde node',
    text:'Mira jeshu, enviado desde el editor de texto omg kkkk'
};

//evento: enviar el correo
transporter.sendMail(mailOptions,function(err,info){
    if(err){
        console.log(err.message);
    }else{
        console.log(info.response);
    }
})
