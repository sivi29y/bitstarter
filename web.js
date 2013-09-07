var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var buf = fs.readFileSync('index.html','utf-8');
var string_hello = buf.toString();
app.get('/', function(request, response) {
  response.send(string_hello);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});


// Render /contacts - does not render but process email to database
app.post('/contact', function(req, res) {
    //var email=[];
    var checkSignup = req.body.signupCheck;
    var name =  "Sivi";  //req.body.name;
    var info =  "Hi!!!";  //req.body.info;
    var email = "moviply.tv@gmail.com"; //req.body.email;
/*
    email.push(req.body.email);

    console.log("email received: %s", email[0]);
    console.log("Sign Up Check: %s", checkSignup);

    //Store Email if User requested by checking the checkbox
    if(checkSignup) {
         //Function to store email Async to the database.
           async.forEach(email, storeEmail, function(err) {
           if (err) {
               console.log(err);
               response.send("error storing emails");
           } else {
                   // email added successfully
                   //response.redirect("/orders");
                   console.log("Email added successfuly to database");
                   }
               });
            }
     console.log("E_User: "+process.env.E_USER);
*/
     
    //Send Email
    var server = emailjs.server.connect({
	user: process.env.G_username,
	password:process.env.G_password,
	host: "smtp.gmail.com",
	port: 465,
	ssl: true
    });
 
    // send the message and get a callback with an error or details of the message that was sent
    var message = {
	text: "Thanks for contacting us! We have receive your message and we will contact you as soon as possible. We received the following information:"
	    +"Name: "+ name + ", Email: "+ email + ", Information Requested: "+ info,
	from: "Chack <info@moviply.tv>",
	to: name + " <"+email+">",
	cc: "Chack <info@toolspin.com>",
	subject: "Information Request Confirmation",
	attachment:
	[
	    {data:"<html>Thanks for contacting us! We have receive your message and we will contact you as soon as possible.<br>"
	     +"We received the following information:<br><br>"
	     +"<strong>Name: </strong>"+name+"<br>"
	     +"<strong>Email: </strong>"+email+"<br>"
	     +"<strong>Information Requested: </strong>"+info+"<br></html>", alternative:true}
	]
    };

    // send the message and get a callback with an error or details of the message that was sent
    server.send(message, function(err, message) { console.log(err || message); });
    
});
