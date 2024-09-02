// sort array of 0, 1, 2s only

let arr = [1, 2, 0, 1, 2, 0, 0, 2];

function sort(arr) {
	let l = 0;
	let r = arr.length - 1;
	let mid = 0;

	while (mid <= r) {
		if (arr[mid] == 0) {
			swap(arr, mid, l);
			l++;
			mid++;
		} else if (arr[mid] == 1) {
			mid++;
		} else {
			swap(arr, mid, r);
			r--;
		}
	}
	return arr;
}

function swap(arr, i, j) {
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

sort([1, 2, 0, 1, 2, 0, 0, 2]);
