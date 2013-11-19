/**
 * Created by oroessner on 19.11.13.
 */

function FizzBuzz() {
	this.out = function(input) {
		var result = "";
		if (input % 3 === 0) {
			result += "Fizz";
		}
		if (input % 5 === 0) {
			result += "Buzz";
		}

		return result || input;
	};
}

var fb = new FizzBuzz();

describe('FizzBuzz Suite', function() {
	it("1 should be 1", function() {
		expect(fb.out(1).toString()).toBe("1");
	});

	it("2 should be 2", function() {
		expect(fb.out(2).toString()).toBe("2");
	});

	it("3 should be Fízz", function() {
		expect(fb.out(3).toString()).toBe("Fizz");
	});

	it("4 should be 4", function() {
		expect(fb.out(4).toString()).toBe("4");
	});

	it("5 should be Buzz", function() {
		expect(fb.out(5).toString()).toBe("Buzz");
	});

	it("6 should be Fizz", function() {
		expect(fb.out(6).toString()).toBe("Fizz");
	});

	it("10 should be Buzz", function() {
		expect(fb.out(10).toString()).toBe("Buzz");
	});

	it("15 should be FizzBuzz", function() {
		expect(fb.out(15).toString()).toBe("FizzBuzz");
	});
});