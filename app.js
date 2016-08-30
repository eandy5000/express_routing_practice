var express = require('express');
var app = express();

app.set('port', 5000);

// app.listen(app.get('port'), function(){
//     console.log("listening on port " + app.get('port'));
// });

server = app.listen(app.get('port'), function(){
    var port = server.address().port;
    console.log('listening on port ' + port);
});


