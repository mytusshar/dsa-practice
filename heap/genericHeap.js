module.exports = class Heap {
	constructor(comparatorFun, minMaxValue) {
		this.comparatorFun = comparatorFun;
		this.values = [];
		this.size = this.values.length;
		this.minMaxValue = minMaxValue;
	}

	compare(i1, i2) {
		return this.comparatorFun(this.values[i1], this.values[i2]);
		// return this.values[i1] - this.values[i2]; // min heap
		// return this.values[i2] - this.values[i1]; // max heap
	}

	getParentIndex(index) {
		return Math.floor((index - 1) / 2); // (index >> 1)
	}

	getLeftChildIndex(index) {
		return 2 * index + 1;
	}

	getRightChildIndex(index) {
		return 2 * index + 2;
	}

	swap(i1, i2) {
		let temp = this.values[i1];
		this.values[i1] = this.values[i2];
		this.values[i2] = temp;
	}

	insert(newVal) {
		if (this.size == this.values.length) {
			this.values.push(newVal);
			this.size = this.values.length;
		} else {
			this.values[this.size] = newVal;
			this.size++;
		}

		let current = this.size - 1;
		let parent = this.getParentIndex(current);
		while (current > 0 && this.compare(current, parent) < 0) {
			this.swap(current, parent);
			current = parent;
			parent = this.getParentIndex(current);
		}
	}

	decreaseKey(index, newVal) {
		this.values[index] = newVal;
		let current = index;
		let parent = this.getParentIndex(current);
		while (current > 0 && this.compare(current, parent) < 0) {
			this.swap(current, parent);
			current = parent;
			parent = this.getParentIndex(current);
		}
	}

	heapify(index) {
		let leftIndex = this.getLeftChildIndex(index);
		let rightIndex = this.getRightChildIndex(index);
		let smallest = index;
		if (leftIndex < this.size && this.compare(leftIndex, smallest) < 0) {
			smallest = leftIndex;
		}
		if (rightIndex < this.size && this.compare(rightIndex, smallest) < 0) {
			smallest = rightIndex;
		}
		if (smallest != index) {
			this.swap(index, smallest);
			this.heapify(smallest);
		}
	}

	extractTop() {
		if (this.size == 0) return null;
		if (this.size == 1) {
			this.size = 0;
			let top = this.values[0];
			this.values[0] = null;
			return top;
		}
		let top = this.values[0];
		this.values[0] = this.values[this.size - 1];
		this.values[this.size - 1] = null;
		this.size--;
		this.heapify(0);
		return top;
	}

	delete(index) {
		this.decreaseKey(index, this.minMaxValue);
		this.extractTop();
	}

	getTop() {
		if (this.size > 0) return this.values[0];
		else return null;
	}
};

// min heap
const comparatorFunForMeanHeap = (a, b) => a - b;
const comparatorFunForMeanHeapObj = (a, b) => a.val - b.val;
const comparatorFunForMeanHeapPair = (a, b) => a[0] - b[0];

// max heap
const comparatorFunForMaxHeap = (a, b) => b - a;
const comparatorFunForMaxHeapObj = (a, b) => b.val - a.val;
const comparatorFunForMaxHeapPair = (a, b) => b[0] - a[0];

function main() {
	const heap = new Heap(comparatorFunForMeanHeapObj, { val: -Infinity });
	// const heap = new Heap(comparatorFunForMeanHeap, -Infinity);
	heap.insert({ val: 5 });
	heap.insert({ val: 4 });
	heap.insert({ val: 3 });
	heap.insert({ val: 2 });
	heap.insert({ val: 1 });
	heap.insert({ val: 0 });

	console.log('Heap: ', heap.values);
	console.log('Heap size: ', heap.size);
	console.log('Heap Top: ', heap.extractTop());
	console.log('Heap: ', heap.values);
	console.log('Heap size: ', heap.size);
	console.log('Heap Top: ', heap.extractTop());
	console.log('Heap: ', heap.values);
	console.log('Heap size: ', heap.size);
	heap.delete(2);
	console.log('Heap: ', heap.values);
	console.log('Heap size: ', heap.size);
	console.log('Heap Top: ', heap.extractTop());
	console.log('Heap: ', heap.values);
	console.log('Heap size: ', heap.size);
	console.log('Heap Top: ', heap.extractTop());
	console.log('Heap: ', heap.values);
	console.log('Heap size: ', heap.size);
	heap.insert({ val: 2 });
	console.log('Heap: ', heap.values);
	console.log('Heap size: ', heap.size);
	heap.insert({ val: 1 });
	console.log('Heap: ', heap.values);
	console.log('Heap size: ', heap.size);
	console.log('Heap Top: ', heap.extractTop());
	console.log('Heap: ', heap.values);
	console.log('Heap size: ', heap.size);
	console.log('Heap Top: ', heap.extractTop());
	console.log('Heap: ', heap.values);
	console.log('Heap size: ', heap.size);
}

main();
