
var data_interface = require('./my_modules/data_interface/data_interface.js');
var _ = require('underscore');

function getRandom(min, max){
    min = Math.floor(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = function(){


    var express = require('express');
    var bodyParser = require('body-parser');
    var cookieParser = require('cookie-parser')
    var app = express();

    app.use( bodyParser.json() );
    app.use(  bodyParser.urlencoded({extended: true})  );
    app.use( cookieParser() );

    // this sets up the public directory so <img> tags can make get requests
    // for images and for linking to css, etc
    app.use(express.static(__dirname + '/public'));


    // QUSTIONS endpoints
    app.get('/api/get_all_questions', function(req, res){
        data_interface.getAllQuestions(function(data){
            // at this point we should make a call to get the examID 
            // but for now lets use a random one
            data = {
                questions : data,
                examID : getRandom(1,999999999999)
            }
            console.log('sending response to client');
            res.json( data ); 
        })
    }); 



    // DATA endpoints
    app.put('/api/data', function(req, res){
        console.log('attempting to put ' + JSON.stringify(req.body));
        data_interface.putData(req.body, function(err, data){
            res.json( err ? err : true );
        });  
    }); 
    app.get('/api/data', function(req, res){
        console.log('attempting to get data');
        data_interface.getAllData(function(data){
            console.log('sending response to client');
            res.json( data );
        });       
    });
    app.get('/api/data/delete', function(req, res){
        console.log('attempting to delete all data');
        data_interface.deleteAllData(function( result ){
            console.log('sending response to client');
            res.json( result );
        });       
    });
    // GRAPH enpoints
    app.get('/api/graph/:examID', function(req, res){
        console.log('attempting to get graph data');
         // note the capitals "ID"  yeh this is a fuck up as in client code it is sometimes "ID"
        var examId = parseInt(req.params.examID); 
        data_interface.getAllData(function(data){
            data = _.where(data, {examId: examId});  // reduce to just this examId
            data = _.pluck(data, 'ans');
            data = _.countBy(data);
            setTimeout(function(){ 
                res.json( data );
            }, 750); 
        });  
    });   


    return app;
}
