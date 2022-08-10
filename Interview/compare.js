//* Design a shallow comparison function

// const typeOf = (input) => {
// 	const rawObject = Object.prototype.toString.call(input).toLowerCase();
// 	const typeOfRegex = /\[object (.*)]/g;
// 	const type = typeOfRegex.exec(rawObject)[1];
// 	return type;
// };

// const shallowCompare = (source, target) => {
// 	if (typeOf(source) !== typeOf(target)) return false;
// 	if (typeOf(source) === 'array') {
// 		if (source.length !== target.length) return false;
// 		return source.every((el, index) => el === target[index]);
// 	}

// 	if (typeOf(source) === 'object') {
// 		if (Object.keys(source).length !== Object.keys(target).length) {
// 			return false;
// 		}
// 		return Object.keys(source).every((key) => source[key] === target[key]);
// 	}

// 	if (typeOf(source == 'date')) {
// 		return source.getTime() === target.getTime();
// 	}
// 	return source === target;
// };

//* Deep comparison

const typeOf = (input) => {
	const rawObject = Object.prototype.toString.call(input).toLowerCase();
	const typeOfRegex = /\[object (.*)]/g;
	const type = typeOfRegex.exec(rawObject)[1];
	return type;
};

const deepCompare = (source, target) => {
	if (typeOf(source) !== typeOf(target)) return false;

	if (typeOf(source) === 'array') {
		if (source.length !== target.length) return false;
		return source.every((el, index) => deepCompare(el, target[index]));
	}

	if (typeOf(source) === 'object') {
		if (Object.keys(source).length !== Object.keys(target).length) {
			return false;
		}
		return Object.keys(source).every((key) => deepCompare(source[key], target[key]));
	}

	// if (typeOf(source === 'date')) {
	// 	return source.getTime() === target.getTime();
	// }
	return source === target;
};

//* Design a memoization function which adds 10 to provide value and take it from cache if it was already calculated

const memoAdd = () => {
	let cache = {};

	return (value) => {
		if (value in cache) {
			console.log('fetching from cache');
			return cache[value];
		} else {
			console.log('Calculating Results');
			const res = value + 10;
			cache[value] = res;
			return res;
		}
	};
};

const newAdd = memoAdd();
console.log(newAdd(9));
console.log(newAdd(9));
