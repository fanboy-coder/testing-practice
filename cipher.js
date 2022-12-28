function caesarCipher (string, shift) {
	const cipher = ["X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W"];

	let match = string.split("");
	let resultArr = [];
	match.forEach(element => {
		let position = cipher.indexOf(element) + shift;
		if (position <=26) {
			resultArr.push(cipher[position]);
		}
		else {
			let newPosition = position - 26;
			resultArr.push(cipher[newPosition]);
		}
	});
	return resultArr.join("");
};

export {caesarCipher};