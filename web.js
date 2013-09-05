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
