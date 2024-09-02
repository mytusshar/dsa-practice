let arr = [2, 3, 5, 1, 0];

function main(arr) {
	let len = arr.length;
	divide(arr, 0, len - 1);
	return arr;
}

function divide(arr, l, r) {
	if (l >= r) return;

	let mid = l + Math.floor((r - l) / 2);
	divide(arr, l, mid);
	divide(arr, mid + 1, r);
	merge(arr, mid, l, r);
}

function merge(arr, mid, l, r) {
	console.log('*****************************************');
	let ln = mid - l + 1;
	let rn = r - mid;

	let arrL = new Array(ln);
	let arrR = new Array(rn);

	for (let i = 0; i < ln; i++) {
		arrL[i] = arr[l + i];
	}
	for (let i = 0; i < rn; i++) {
		let baseI = mid + 1;
		arrR[i] = arr[baseI + i];
	}

	let il = 0;
	let ir = 0;
	let ai = l;
	while (il < ln && ir < rn) {
		if (arrL[il] <= arrR[ir]) {
			console.log('left merge: ai, il, ir', ai, il, ir);
			arr[ai] = arrL[il];
			il++;
		} else if (arrR[ir] <= arrL[il]) {
			console.log('right merge: ai, il, ir', ai, il, ir);
			arr[ai] = arrR[ir];
			ir++;
		}
		ai++;
	}

	while (il < ln) {
		console.log('remaining left merge: ai, il, ir', ai, il, ir);
		arr[ai] = arrL[il];
		il++;
		ai++;
	}
	while (ir < rn) {
		console.log('remaining right merge: ai, il, ir', ai, il, ir);
		arr[ai] = arrR[ir];
		ir++;
		ai++;
	}

	console.log('mid, l, r: ', mid, l, r);
	console.log('ln, rn: ', ln, rn);
	console.log('arrL: ', arrL);
	console.log('arrR: ', arrR);
	console.log('Merged arr: ', arr);
	console.log('*****************************************');
}
