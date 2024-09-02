let arr = [-1, -2, 4, -1, 1, 3, -5, 9, 2];

function maxSubArrSum(arr) {
	let len = arr.length;
	let maxSumSoFar = -Infinity;
	let maxEndingHere = 0;
	let startResetAt = 0;
	let start = 0;
	let end = 0;

	for (let i = 0; i < len; i++) {
		maxEndingHere += arr[i];
		if (maxSumSoFar < maxEndingHere) {
			maxSumSoFar = maxEndingHere;
			if (maxEndingHere == arr[i]) {
				start = i;
				startResetAt = i;
			} else {
				start = startResetAt;
			}
			end = i;
		}
		if (maxEndingHere < 0) {
			maxEndingHere = 0;
			startResetAt = i;
		}
	}
	console.log('maxSumSubArr: ', arr.slice(start, end + 1));
	console.log('maxSubArrSum: ', maxSumSoFar);
	return maxSumSoFar;
}
