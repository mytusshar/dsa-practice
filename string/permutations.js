function swap(a, i, j) {
	let charArray = a.split('');
	let temp = charArray[i];
	charArray[i] = charArray[j];
	charArray[j] = temp;
	return charArray.join('');
}
function permute(str, l, r) {
	console.log(`permute(${str},${l},${r}) `);
	if (l == r) {
		console.log(`======> `, str);
	} else {
		for (let i = l; i <= r; i++) {
			str = swap(str, l, i);
			permute(str, l + 1, r);
			str = swap(str, l, i);
		}
	}
}

permute('ABC', 0, 'ABC'.length - 1);
