
var _ = require('underscore');


var questionsModel = require('./mongo/models/questionsModel');
var dataModel = require('./mongo/models/dataModel');

function getAllQuestions(callback){
	questionsModel.find().lean().exec(
		{},
		function(err, data){
			if (err) {
				console.log('pull_all_question helper retreive complete err = ', err);
				callback(null);
			} else {
				console.log('pull_all_question helper retreive complete no error');
				callback(data);
			}
			console.log('exiting data_interface.getAllQuestions');
		}
	);
}

function putData(payload){
	var newItem = new dataModel( payload );
	newItem.save(
		function(err){				
			if (err) {
				console.log('putData helper save complete err = ', err);
			} else {
				console.log('putData helper save complete no error');
			}
		}
	);
}


	
module.exports = {
	getAllQuestions : getAllQuestions,
	putData : putData
};


