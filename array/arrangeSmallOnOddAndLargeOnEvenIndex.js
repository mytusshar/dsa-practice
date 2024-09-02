function rearrange(arr) {
	let n = arr.length;
	for (let i = 1; i < n; i++) {
		// if index is even
		if (i % 2 == 0) {
			if (arr[i] > arr[i - 1]) {
				// swap two elements
				let temp = arr[i];
				arr[i] = arr[i - 1];
				arr[i - 1] = temp;
			}
		}

		// if index is odd
		else {
			if (arr[i] < arr[i - 1]) {
				// swap two elements
				let temp = arr[i];
				arr[i] = arr[i - 1];
				arr[i - 1] = temp;
			}
		}
	}

	return arr;
}
