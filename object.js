class analyzeArray {
	constructor(arr) {
		this.average = arr.reduce((a, b) => a + b, 0) / arr.length;
		this.min = Math.min(...arr);
		this.max = Math.max(...arr);
		this.length = arr.length;
	}
};

const arr = new analyzeArray([1,8,3,4,2,6]);
arr.average
arr.min
arr.max
arr.length

export {analyzeArray};