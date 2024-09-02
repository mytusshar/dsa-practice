let arr = [1, 2, 1, 3, 1];
let k = 3;
function countSubArrWithProduct(arr, k) {
	let n = arr.length;
	let ans = 0;
	let l = 0;
	let r = 0;
	let p = 1;
	while (r < n) {
		p *= arr[r];

		if (p > k) {
			while (p > k && l <= r) {
				p /= arr[l];
				l++;
			}
		}

		if (p == k) {
			let countOfOnes = 0;
			while (r + 1 < n && arr[r + 1] == 1) {
				r++;
				countOfOnes++;
			}
			ans += countOfOnes + 1;

			while (l <= r && arr[l] == 1) {
				l++;
				ans += countOfOnes + 1;
			}
		}
		r++;
	}
	return ans;
}
