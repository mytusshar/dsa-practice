let arr = [0, 1, 2, 3, 4, 5];
let rotateTimes = 2;
rightRotate(arr, rotateTimes);

function rightRotate(arr, rotateTimes) {
	let n = arr.length;
	rotateTimes = rotateTimes % n;

	let swapCount = 0;
	let srcIdx = 0;
	let srcVal = arr[srcIdx];
	let swapStartIdx = 0;

	while (swapCount < arr.length) {
		let tarIdx = (srcIdx + rotateTimes) % n;
		let nextSrcVal = arr[tarIdx];
		arr[tarIdx] = srcVal;
		srcVal = nextSrcVal;
		srcIdx = tarIdx;
		swapCount++;

		if (tarIdx == swapStartIdx) {
			swapStartIdx++;
			srcIdx = swapStartIdx;
			srcVal = arr[srcIdx];
		}
	}
	return arr;
}

function leftRotate(arr, rotateTimes) {
	let n = arr.length;
	rotateTimes = rotateTimes % n;

	let swapStartIdx = 0;
	let srcIdx = swapStartIdx;
	let srcVal = arr[srcIdx];
	let swapCount = 0;

	while (swapCount < n) {
		let tarIdx = (n + srcIdx - rotateTimes) % n;
		let nextSrcVal = arr[tarIdx];
		arr[tarIdx] = srcVal;
		srcVal = nextSrcVal;
		srcIdx = tarIdx;
		swapCount++;

		if (tarIdx == swapStartIdx) {
			swapStartIdx++;
			srcIdx = swapStartIdx;
			srcVal = arr[srcIdx];
		}
	}
	return arr;
}
