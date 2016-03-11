var myPromise = require('promise');

var Testing = function() {

	return {

		getName: function getName() {
			return 'Kevin';
		}
		, getAge: function getAge() {
			return 24;
		}
		, getAgeStr: function getAgeStr() {
			return '24';
		}
		, getPromise: function getPromise() {
			return new myPromise(function(resolve, reject) {
				resolve('Resolve');
			});
		}
	}
};
module.exports = Testing;