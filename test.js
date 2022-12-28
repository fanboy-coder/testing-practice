import { calculator } from "./calculator";
import { capitalize } from "./capitalize";
import { caesarCipher } from "./cipher";
import { analyzeArray } from "./object";
import { reverseString } from "./reverse";


//calculator tests
test("adds 1+2 to equal 3", () => {
	expect(calculator.add(1,2)).toBe(3);
});

test("expects 10-9 to equal 1", () => {
	expect(calculator.subtract(10,9)).toBe(1);
});

test("expects 10 divided by 5 to equal 2", () => {
	expect(calculator.divide(10,5)).toBe(2);
});

test("expects 10 multiplied by 5 to equal 50", () => {
	expect(calculator.multiply(10,5)).toBe(50);
});

//Capitalization test
test("expects how are you? to equal How are you?", () => {
	expect(capitalize("how are you?")).toBe("How are you?");
});

//Caesar's cipher test
test("expects ROMA to equal WTRJ", () => {
	expect(caesarCipher("ROME",4)).toBe("VSQI");
})

//Analyze array test
test("takes an array of numbers and returns the min, max, average and length", () => {
	expect(new analyzeArray([1,8,3,4,2,6])).toEqual({"average": 4, "length": 6, "max": 8, "min": 1});
});

//Reverse string test
test("expects Roma to equal amoR", () => {
	expect(reverseString("Roma")).toBe("amoR");
});