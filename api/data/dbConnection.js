var MongoClient = require('mongodb').MongoClient;
var dbUrl = "mongodb://localhost:27017/hotel_app";
var _connection = null;

var open = function(){
    //sets connection
    MongoClient.connect(dbUrl, function(err, db){
        if(err){
            console.log("connection failed ",err);
            return;
        }
        _connection = db;
        console.log('connected ', db);
    });

}

var get = function(){
    return _connection;
}

module.exports = {
    open : open,
    get : get
}