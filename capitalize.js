function capitalize(string) {
	let first = string.slice(0,1).toUpperCase();
	let rest = string.slice(1, string.length);
	let result = first.concat(rest);
	return result;
}

export {capitalize};