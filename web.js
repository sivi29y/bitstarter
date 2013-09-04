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


var email   = require("emailjs/email");
var server  = email.server.connect({
   user:    "moviply.tv@gmail.com", 
   password:"man&you44", 
   host:    "smtp.gmail.com", 
   ssl:     true

});

// send the message and get a callback with an error or details of the message that was sent
server.send({
   text:    "i hope this works", 
   from:    "you <username@gmail.com>", 
   to:      "someone <someone@gmail.com>, another <another@gmail.com>",
   cc:      "else <else@gmail.com>",
   subject: "testing emailjs"
}, function(err, message) { console.log(err || message); });
