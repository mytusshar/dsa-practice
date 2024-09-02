function createPrefixAsWellAsSuffixArray(pattern) {
	let pat = pattern;
	let lps = new Array(pat.length);
	let i = 0;
	lps[0] = 0;
	for (let j = 1; j < pat.length; j++) {
		if (pat[i] == pat[j]) {
			lps[j] = i + 1;
			i++;
		} else {
			lps[j] = 0;
			while (i - 1 >= 0) {
				i = lps[i - 1];
				if (pat[i] == pat[j]) {
					lps[j] = i + 1;
				}
			}
		}
	}
	return lps;
}

function kmpSubstringSearch(text, pattern) {
	let pat = pattern;
	let lps = createPrefixAsWellAsSuffixArray(pat);
	console.log('lps: ', lps);
	let j = 0;
	let i = 0;
	let isPresent = false;
	while (i < text.length) {
		if (text[i] == pat[j]) {
			if (j == pat.length - 1) {
				isPresent = true;
				break;
			}
			j++;
		} else {
			if (j - 1 >= 0) {
				j = lps[j - 1];
				i--;
			}
		}
		i++;
	}
	if (isPresent)
		console.log('Pattern: ', text.substring(i + 1 - pat.length, i + 1));
	else console.log('Not found');
}
