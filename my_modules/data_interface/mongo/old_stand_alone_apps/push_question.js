
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
},{
	qid: 5,
	desc: 'Boring boring boring boring. Boring. Boring. Boring. Boring boring boring boring. Boring. Boring. Boring.',
	ans: 'B'		
},{
	qid: 6,
	desc: 'Yawn yawn. Yawn yawn. Yawn yawn. Yawn yawn. Yawn yawn. Yawn yawn. Yawn yawn. Yawn yawn. Yawn yawn.',
	ans: 'B'		
}];

var dbconnect = require('../dbconnectmlab'); // mongoose connections to mongolab

var questionsModel = require('../models/questionsModel');

var newItem = new questionsModel( record[5] );
newItem.save(
	function(err){				
		if (err) {
			console.log('questionsModel helper save complete err = ', err);
		} else {
			console.log('questionsModel helper save complete no error');
		}
	}
);


