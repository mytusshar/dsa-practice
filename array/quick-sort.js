let arr = [-2, 0, -1];
main(arr);
console.log('sorted arr: ', arr);

function main(arr) {
	let len = arr.length;
	quickSort(arr, 0, len - 1);
	return arr;
}

function quickSort(arr, l, h) {
	if (l < h) {
		let pivot = partition(arr, l, h);
		quickSort(arr, l, pivot - 1);
		quickSort(arr, pivot + 1, h);
	}
}

function partition(arr, l, h) {
	let pivot = arr[l];

	let i = l;
	let j = h;

	while (i < j) {
		while (arr[i] < pivot) {
			i++;
		}
		while (arr[j] > pivot) {
			j--;
		}
		if (i < j) {
			swap(arr, i, j);
		}
	}
	arr[i] = pivot;
	return i;
}

function swap(arr, i, j) {
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}
