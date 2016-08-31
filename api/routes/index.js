var express = require('express');
var router = express.Router();
var path = require('path');
var ctrlHotels = require('../controllers/hotels.controller.js');

router
    .route('/hotels')
    .get(ctrlHotels.getAllHotels);
router
    .route('/hotels/:hotelId')
    .get(ctrlHotels.getOneHotel);


module.exports = router;