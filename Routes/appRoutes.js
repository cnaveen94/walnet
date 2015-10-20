var express = require('express');


var routes = function(signu_up){

    var appRouter = express.Router();

    appRouter.route('/')
        .get(function(req,res){
            console.log("We are in appRouter BASE ");
            res.send(' From Route');

        });

    appRouter.route('/login')
        .get(function(req,res){
            console.log(" USER Login ");
            //res.sendfile('./data/new.json');

        });
    appRouter.route('/new')
        .get(function(req,res){
            console.log("We are in Walnet new user regis GET ");
            res.send('GET: data updated successfully ');
        })
        .post(function(req,res){


            var jsonString = '';
            req.on('data', function (data) {
                jsonString += data;

                var jsonObj = JSON.parse(jsonString);
                var drink_name = jsonObj.drink_name;

                var find = " ";
                var re = new RegExp(find, 'g');
                drink_name = drink_name.replace(re, '_');
                var fileName = "./data/new/"+drink_name+".json";

                fs = require('fs');
                fs.writeFile(fileName, jsonString, function (err) {
                    if (err) {
                        return console.log(err);
                        res.json({"error" : true,"message" : "Problem updating. Please try again later"});
                    }
                });

            });
            req.on('end', function () {
                //console.log(JSON.parse(jsonString));
            });

            res.json({"error" : false,"message" : "Updated Successfully..."});


        });
    return appRouter;
};



module.exports = routes;