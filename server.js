var express = require('express');
var app = express();
//import mongodb package
var mongodb = require("mongodb");

var port=process.env.PORT || 8080;
var morgan = require('morgan');
var mongoose = require('mongoose');
var path = require('path');

app.use(morgan('dev'));
app.use(express.static(__dirname + '/'));
app.use('/webapp', express.static(__dirname + '/webapp'));
/*
mongoose.connect('mongodb://localhost:27017/India', function(err){
	if (err){
		consol.log('Not connected to the database: '+ err);
	}else{
		console.log('Successfully connected to MongoDB');
	}
});*/

	//MongoDB connection URL - mongodb://host:port/dbName
    var dbHost = "mongodb://localhost:27017/Rainfall";
     
    //DB Object
    var dbObject;
     
    //get instance of MongoClient to establish connection
    var MongoClient = mongodb.MongoClient;
     
    //Connecting to the Mongodb instance.
    //Make sure your mongodb daemon mongod is running on port 27017 on localhost
    MongoClient.connect(dbHost, function(err, db){
      if (err){
      	consol.log('Not connected to the database: '+ err);
      }
      else {
      	dbObject = db;
      	console.log('Successfully connected to MongoDB');
      }
      
    });

app.use(express.static(__dirname + '/public'));

 State = [];
 avgRain = [];

app.get('*', function(req, res){
	//getData(res);/////////////////////////////////////////////
	res.sendFile(path.join(__dirname + '/public/index.html'));

	dbObject.collection("Precipitation").aggregate(
    [
     { $match :{ Year : 2014 } },
     { $group: { _id: "$State", avgRainfall: { $avg: "$Annual Total" } } },
     { $sort: { avgRainfall: -1 } },
     { $limit: 5}
    ]).toArray(function(err, docs){
		

        if ( err ) throw err;
        
        
        //console.log(cursor);
     
        for ( index in docs){
          var doc = docs[index];
          //category array
          var state = doc['_id'];
          //series 1 values array
          var rain = doc['avgRainfall'];
          
          State.push({"label": state});
          avgRain.push({"value" : rain});
          
          
          
        }

        console.log(State);
        console.log(avgRain);  

    var response = {
          "state" : State,
          "avgrain" : avgRain
        };
        

        //console.log(response.state);

    //app.get("/index", function(req, res){
  	//getData(res);
	//});
	});
});

app.listen(port, function(){
	console.log('Running the server on port ' + port);
});

///////////////////////////////////////////////////////////////
/* function getData($scope){
      //use the find() API and pass an empty query object to retrieve all records
      dbObject.collection("Precipitation").aggregate(
    [
     { $match :{ Year : 2014 } },
     { $group: { _id: "$State", avgRainfall: { $avg: "$Annual Total" } } },
     { $sort: { avgRainfall: -1 } },
     { $limit: 5}
    ]).toArray(function(err, docs){
        if ( err ) throw err;
        
        var State = [];
        var avgRain = [];
     
        for ( index in docs){
          var doc = docs[index];
          //category array
          var month = doc['_id'];
          //series 1 values array
          var rain = doc['petrol'];
          
          State.push({"label": month});
          avgRain.push({"value" : rain});
          
        }
     
      

    var response = {
          "state" : State,
          "avgrain" : avgRain
        };

    //app.get("/index", function(req, res){
  	//getData(res);
	//});
	});
    }

    */

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
