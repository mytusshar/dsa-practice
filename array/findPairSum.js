let arr = [1, 2, 3, 4];
let sum = 4;

function getPairFromSortedArr(arr, sum) {
	let l = 0;
	let r = arr.length - 1;

	while (l < r) {
		let curSum = arr[l] + arr[r];
		if (curSum == sum) {
			return { a: arr[l], b: arr[r] };
		}
		if (curSum > sum) r--;
		else l++;
	}
	return -1;
}
