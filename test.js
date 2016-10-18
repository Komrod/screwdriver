
var sd = require('./lib/screwdriver.js');


/*

var result = sd.mkdirpSync('testSync');
console.log('result = '+result);
*/

sd.mkdirp('test/test2/test3/test4', '0777', function(success) {
	console.log('mkdirp: success='+success);
});


