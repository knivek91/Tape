var tape 		= require('tape');
var tapSpec 	= require('tap-spec');
var testFile 	= require('./index.js');
var Test 		= testFile();

tape.createStream()
  .pipe(tapSpec())
  .pipe(process.stdout);


tape.test('Equal Age', function(t) {

	t.equal(Test.getAge(), 24, 'equal');
	t.deepEqual(Test.getAge(), '24', '=== equal');
	t.deepLooseEqual(Test.getAge(), 24, '== equal');
	t.end();

});

tape.test('Equal Name', function(t) {

	t.equal(Test.getName(), 'kevin', 'equal');
	t.deepEqual(Test.getName(), 'KEVIN', '=== equal');
	t.deepLooseEqual(Test.getName(), 'Kevin', '== equal');
	t.end();

});

tape.test('Promise Test', function(t) {

	Test.getPromise().then(function(resp) {
		t.equal(resp, 'Resolve', 'equal');
	});
	t.end();

});

