var nodemailer=require('nodemailer');
var transporter=nodemailer.createTransport({
	service:'gmail',
	auth:{
		user:'solohitechnology02@gmail.com',
		pass:'solohitech09'
	}
});

mailoption={
	from:'solohitechnology02@gmail.com',
	to:'solohitechnology09@gmail.com',
	subject:'sending mail via node.js app',
	text:'hi am solomon, i love codding and am a backend developer'
};

transporter.sendMail(mailoption,(err,info)=>{
	if (err) {
		console.log(err)
	}else{
		console.log('email sent:' + info.response)
	}
})