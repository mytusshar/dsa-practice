function printPairs(a, x) {
	console.log('');
	let n = a.length;
	let i;
	let rem = new Array(x);
	for (i = 0; i < x; i++) {
		// Initializing the rem
		// values with 0's.
		rem[i] = 0;
	}
	for (i = 0; i < n; i++) {
		if (a[i] < x) {
			// Perform the remainder
			// operation only if the
			// element is x, as numbers
			// greater than x can't
			// be used to get a sum x.
			// Updating the count of remainders.
			rem[a[i] % x]++;
		}
	}

	// Traversing the remainder list
	// from start to middle to
	// find pairs
	for (i = 1; i < x / 2; i++) {
		if (rem[i] > 0 && rem[x - i] > 0) {
			console.log(`Yes: (${i},  ${x - i})`);
			break;
		}
	}

	// Once we reach middle of
	// remainder array, we have to
	// do operations based on x.
	if (i >= x / 2) {
		if (x % 2 == 0) {
			if (rem[x / 2] > 1) {
				// If x is even and
				// we have more than 1
				// elements with remainder
				// x/2, then we will
				// have two distinct elements
				// which add up
				// to x. if we dont have
				//more than 1
				// element, print "No".
				console.log(`Yes: (${x / 2},  ${x / 2})`);
			} else {
				console.log('No');
			}
		} else {
			// When x is odd we continue
			// the same process
			// which we did in previous loop.
			if (rem[x / 2] > 0 && rem[x - x / 2] > 0) {
				console.log(`Yes: (${x / 2},  ${x - x / 2})`);
			} else {
				console.log('No');
			}
		}
	}
	console.log('mainArr: ', a);
	console.log('remArr: ', rem);
}

var A = [1, 4, 45, 6, 10, 8];
var x = 16;
printPairs(A, x);

printPairs([1, 4, 45, 6, 10, 8], 16);
