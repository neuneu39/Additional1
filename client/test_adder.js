const product = require('./product.js');

class TestSuite{
	runTests()　{
		this.testmultiplePositiveNumbers();
		this.testmultipleNegativeNumbers();
		this.testmultiplePositiveAndNegativeNumbers();
	}

	assertEquals(a, b) {
		return a === b;
	}

	testmultiplePositiveNumbers() {
		const result = this.assertEquals(product(5, 7), 35);
		console.log(result, 'testmultiplePositiveNumbers');
	}

	testmultipleNegativeNumbers() {
		const result = this.assertEquals(product(-5, -7), 35);
		console.log(result, 'testmultipleNegativeNumbers');
	}

	testmultiplePositiveAndNegativeNumbers() {
		const result = this.assertEquals(product(5, -7), -35);
		console.log(result,'testmultiplePositiveNumbers');
	}

}

const testSuite = new TestSuite();
testSuite.runTests();

