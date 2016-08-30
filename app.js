var express = require('express');
var app = express();
var path = require('path');

app.set('port', 5000);

app.get('/', function(req, res){
    console.log('get the homepage');
    res
        .status(200)
        .send("home");
});

app.get('/file', function(req, res){
    console.log('getting file');
    res
        .status(200)
        .sendFile(path.join(__dirname, 'app.js'));
});

server = app.listen(app.get('port'), function(){
    var port = server.address().port;
    console.log('listening on port ' + port);
});


