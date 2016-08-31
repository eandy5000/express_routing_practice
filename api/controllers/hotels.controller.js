var hotelData = require('../data/data.json');


module.exports.getAllHotels = function(req, res){
    console.log("getting file");
    res
        .status(200)
        .json(hotelData);
};