var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {

  var index = fs.readFileSync('index.html');
  var indexString = index.toString();
  response.send(indexString);

});


app.get('/play.html', function(request, response) {

  var play = fs.readFileSync('play.html');
  var playString = play.toString();
  response.send(playString);

});




var port = process.env.PORT || 8080;//5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
