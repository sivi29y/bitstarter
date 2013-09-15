var express = require('express');
var fs = require('fs');
//var async = require('async')
//var http = require('http')
//var https = require('https')
//var db = require('./models')
var emailjs = require('emailjs');
var api_user = process.env.SENDGRID_USERNAME;
var api_key = process.env.SENDGRID_PASSWORD;
var sendgrid  = require('sendgrid')(api_user, api_key,{api: 'smtp'});

//var app = express();
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
    //var checkSignup = req.body.signupCheck;
    var name =  req.form_name;
    var info =  req.form_msg;
    var email = req.form_email;
    var payload   = {
                        to      : 'moviply.tv@gmail.com',
                        from    : 'sivi@moviply.tv',
                        subject : 'Saying Hi again',
                        text    : 'This is my second email through SendGrid'
       }


    sendgrid.send(payload, function(err, json) {
                        if (err) { console.error(err); }
                             console.log(json);
    });






});
