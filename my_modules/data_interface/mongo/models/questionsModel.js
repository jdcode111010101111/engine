
var mongoose = require('mongoose');

module.exports = mongoose.model(
	'questions',
	{
		qid: Number,
		desc: String,
		ans: String
	}
);