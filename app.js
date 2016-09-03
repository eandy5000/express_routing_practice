require('./api/data/db.js');
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var router = require('./api/routes');

app.set('port', 5000);

app.use(function(req, res, next){
    console.log(req.method, req.url);
    next();
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended : false}));
app.use('/api', router);



server = app.listen(app.get('port'), function(){
    var port = server.address().port;
    console.log('listening on port ' + port);
});


