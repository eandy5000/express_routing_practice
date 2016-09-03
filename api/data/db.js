var mongoose = require('mongoose');
var dbUrl = "mongodb://localhost:27017/hotel_app";


mongoose.connect(dbUrl);

mongoose.connection.on('connected', function(){
    console.log("mongoose connected to " + dbUrl);
});
mongoose.connection.on('disconnected', function(){
    console.log("mongoose disconnected");
});
mongoose.connection.on('error', function(err){
    console.log("mongooose connection error ", err)
});

//terminal restarts
process.on('SIGINT', function(){
    mongoose.connection.close(function(){
        console.log("connection closed by termminal SIGINT");
        process.exit(0);
    });
});

//heroku terminal restarts
process.on('SIGTERM', function(){
    mongoose.connection.close(function(){
        console.log("connection closed by termminal SIGTERM");
        process.exit(0);
    });
});

//nodemon restarts
process.once('SIGUSR2', function(){
    mongoose.connection.close(function(){
        console.log("nodemon restart");
        process.kill(process.pid, 'SIGUSR2');
    });
});