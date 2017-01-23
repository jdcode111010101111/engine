var dbconnect = require('../dbconnectmlab'); // mongoose connections to mongolab

var questionsModel = require('../models/questionsModel');

questionsModel.find().lean().exec(
	{},
	function(err, data){
		if (err) {
			console.log('pull_all_question helper retreive complete err = ', err);
		} else {
			console.log('pull_all_question helper retreive complete no error');
			console.log('---');
			console.log(data);
		}
	}
);




