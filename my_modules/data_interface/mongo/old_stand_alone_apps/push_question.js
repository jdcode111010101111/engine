
/*
		qid: Number,
		desc: String,
		ans: String
*/


var record = [{
	qid: 1,
	desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	ans: 'A'
},{
	qid: 2,
	desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
	ans: 'B'		
},{
	qid: 3,
	desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
	ans: 'C'		
},{
	qid: 4,
	desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	ans: 'D'		
}];

var dbconnect = require('../dbconnectmlab'); // mongoose connections to mongolab

var questionsModel = require('../models/questionsModel');

var newItem = new questionsModel( record[0] );
newItem.save(
	function(err){				
		if (err) {
			console.log('questionsModel helper save complete err = ', err);
		} else {
			console.log('questionsModel helper save complete no error');
		}
	}
);


