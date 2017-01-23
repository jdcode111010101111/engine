
var mongoose = require('mongoose');

module.exports = mongoose.model(
	'data',
	{
		qid: Number,
		examId: Number,
		ans: String
	}
);