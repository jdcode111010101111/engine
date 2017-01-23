var mongoose = require('mongoose');

// newly arrived warning  "Mongoose: mpromise (mongoose's default promise library) is deprecated, plug in your own promise library instead: http://mongoosejs.com/docs/promises.html"
// this is caused by mongoose methods returning a promise even though we are using callbacks
// the solution is to add the following line of code, also documented here at this thread https://github.com/Automattic/mongoose/issues/4291
mongoose.Promise = global.Promise;

// mlab
mongoose.connect('mongodb://firstuser:firstuser@ds127429.mlab.com:27429/test-engine');

module.exports = mongoose.connection;