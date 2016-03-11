var tape = require('tape');
var tapSpec = require('tap-spec');
var testFile = require('./index.js');
var Test = testFile();

tape.createStream()
  .pipe(tapSpec())
  .pipe(process.stdout);


tape.test('Equal Age', function(t) {

	t.equal(Test.getAge(), 24, 'equal');
	t.deepEqual(Test.getAge(), '24', '=== equal');
	t.deepLooseEqual(Test.getAge(), 24, '== equal');
	t.end();

});

tape.test('Equal Age String', function(t) {

	t.equal(Test.getAgeStr(), 24, 'equal equal');
	t.deepEqual(Test.getAgeStr(), '24', '=== equal');
	t.deepLooseEqual(Test.getAgeStr(), 24, '== equal');
	t.end();

});

tape.test('Equal Name', function(t) {

	t.equal(Test.getName(), 'kevin', 'equal');
	t.deepEqual(Test.getName(), 'KEVIN', '=== equal');
	t.deepLooseEqual(Test.getName(), 'Kevin', '== equal');
	t.end();

});