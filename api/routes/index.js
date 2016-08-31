var express = require('express');
var router = express.Router();
var path = require('path');
var ctrlHotels = require('../controllers/hotels.controller.js');

router
    .route('/hotels')
    .get(ctrlHotels.getAllHotels);
router
    .route('/test')
    .get(function(req, res){
        console.log('test route working');
        res
            .status(200)
            .sendFile(path.join(__dirname, '../../', 'app.js'));
    });    


module.exports = router;