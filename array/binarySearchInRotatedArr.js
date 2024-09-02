let arr = [5, 1, 2, 3, 4];
let x = 1;

function rotatedBinarySearch(arr, x) {
	let l = 0;
	let h = arr.length - 1;

	while (l <= h) {
		let mid = (l + h) >> 1;
		if (arr[mid] == x) return mid;

		// if left subarray sorted
		if (arr[l] <= arr[mid]) {
			if (arr[l] <= x && x <= arr[mid]) {
				h = mid - 1; // if present in left array
			} else {
				l = mid + 1; // else present in right unsorted array
			}
		} else {
			// right subarray is sorted
			if (arr[mid] <= x && x <= arr[h]) {
				l = mid + 1; // if present in right array
			} else {
				h = mid - 1; // else present in left unsorted array
			}
		}
	}
	return -1;
}

function minOfRotatedSortedArr(arr) {
	let l = 0;
	let h = arr.length - 1;

	while (l <= h) {
		let mid = (l + h) >> 1;
		// if mid is pivote
		if (mid == h && arr[mid - 1] >= arr[mid]) {
			// if mid is rightmost element then if second last element is greater than last element, then mid is pivot
			return arr[mid];
		} else if (mid == 0 && arr[mid] <= arr[mid + 1]) {
			// if mid is leftmost element then if second element is greater than first element, then mid is pivot
			return arr[mid];
		} else if (arr[mid - 1] >= arr[mid] && arr[mid] <= arr[mid + 1]) {
			// if mid is any middle element then if element at (mid-1) > mid && mid < (mid+1), then mid is pivot
			return arr[mid];
		}

		let isLeftSorted = arr[l] <= arr[mid];
		let isRightSorted = arr[mid] <= arr[h];
		// if both subarray sorted
		if (isLeftSorted && isRightSorted) {
			return arr[l];
		} else if (isLeftSorted) {
			l = mid + 1;
		} else {
			// if RightSorted
			h = mid - 1;
		}
	}
	return -1;
}
