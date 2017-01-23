var dbconnect = require('../dbconnectmlab'); // mongoose connections to mongolab

var questionsModel = require('../models/questionsModel');

questionsModel.find(
	{qid: 1},
	function(err, data){
		if (err) {
			console.log('pull_question helper retreive complete err = ', err);
		} else {
			console.log('pull_question helper retreive complete no error');
			console.log('---');
			console.log(data);
		}
	}
);


