
module.exports = function(arg, dbconnect, callback){

		// Drop the 'gameturns' collection from the current database
		// or  'gameids'
		
		if (arg=='gameturns') dbconnect.db.dropCollection('gameturns', function(err, result) {
			console.log('err ', err);
			console.log('result ', result);
			callback(err ? err : { result : result });
		});

		if (arg=='gameids') dbconnect.db.dropCollection('gameids', function(err, result) {
			console.log('err ', err);
			console.log('result ', result);
			callback(err ? err : { result : result });
		});


		if (arg=='storiestype1') dbconnect.db.dropCollection('storiestype1', function(err, result) {
			console.log('err ', err);
			console.log('result ', result);
			callback(err ? err : { result : result });
		});			
		

}



