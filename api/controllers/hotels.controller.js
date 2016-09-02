var hotelData = require('../data/data.json');
var dbcon = require('../data/dbConnection.js');
var ObjectId = require('mongodb').ObjectId;


module.exports.getAllHotels = function(req, res){
    console.log("getting file");

    var db = dbcon.get();
    console.log("db!! ", db);
    var collection = db.collection('hotels');

    var offset = 0;
    var count = 5;

    if(req.query && req.query.offset){
        offset = parseInt(req.query.offset, 10);
    }

    if(req.query && req.query.count){
        count = parseInt(req.query.count, 10);
    }

    //var returnData = hotelData.slice(offset, offset + count); 

    collection
        .find()
        .skip(offset)
        .limit(count)
        .toArray(function(err, docs){
            if (err) {
                consolelog("error ", err);
            }
            res
                .status(200)
                .json(docs);
        });

    // res
    //     .status(200)
    //     .json(returnData);
};

module.exports.getOneHotel = function(req, res) {
    var db = dbcon.get();
    var collection = db.collection('hotels');
    var hotelId = req.params.hotelId;

    collection
        .findOne({
            _id : ObjectId(hotelId)
        }, function(err, doc){
            console.log("get one hotel with id ", hotelId);
            res
                .status(200)
                .json(doc);

        });
}

module.exports.addOneHotel = function(req, res){
    console.log("Adding Hotel to database");
    console.log(req.body);
    res
        .status(200)
        .json(req.body);
};