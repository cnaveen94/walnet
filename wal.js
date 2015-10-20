var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');


//var db = mongoose.connect('mongodb://localhost/boozerdb');
var signu_up = require('./models/signUpModel');

var app = express();
var port = process.env.PORT || 8000;

appRouter = require('./Routes/appRoutes')(signu_up);
app.use('/api/user', appRouter);


app.get("/",function(req,res){
    console.log("We are in walnet app root")
    res.json({"error1" : true,"message" : "You are at te ROOT"});
    //res.sendfile('data/new.json');
});

app.listen(port, function(){
    console.log(' Wal net app is running on  PORT: ' + port);
});