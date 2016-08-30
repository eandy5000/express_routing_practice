var express = require('express');
var router = express.Router();
var path = require('path');

router
    .route("/file")
    .get(function(req, res){
        console.log('getting file');
            res
                .status(200)
                .sendFile(path.join(__dirname, '../', 'app.js'));
    })
    .post(function(req, res){
    console.log('posting to /file');
        res
            .status(200)
            .json({message: "post successfull"});
    });

module.exports = router;