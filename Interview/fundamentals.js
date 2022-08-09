// 1. Write code to get array of names from given array of users
// 2. Get back only active users
// 3. Sort users by age descending
const users = [
	{
		id: 1,
		name: 'Jack',
		isActive: true,
		age: 20,
	},
	{
		id: 2,
		name: 'John',
		isActive: true,
		age: 18,
	},
	{
		id: 3,
		name: 'Mike',
		isActive: false,
		age: 30,
	},
];

const userName = users.map((user) => user.name);
const activeUsers = users.filter((user) => user.isActive).map((user) => user);
const sortedAge = users.sort((a, b) => b.age - a.age).map((user) => user.name);

// Hoisting
let var2 = null;
// console.log(typeof var2);

foo = 1;
// console.log(foo);
var foo;

//Closures

function privateCounter() {
	let count = 0;
	return {
		increment: (val = 1) => (count += val),
		getValue: () => count,
	};
}

const counter = privateCounter();

function privateSecret() {
	const secret = 'foo';
	return () => secret;
}

const getSecret = privateSecret();
// console.log(getSecret());

//* Currying
function multiply(num1) {
	return (num2) => {
		return num1 * num2;
	};
}

const multi = (num1) => (num2) => num1 * num2;

// console.log(multi(2)(5));

// const curriedSum = curry((a,b,c) => a + b + c)
function curry(fn) {
	let arity = fn.length;
	return function f1(...args) {
		if (arguments.length >= arity) {
			return fn(...args);
		} else {
			return function f2(...moreArgs) {
				const newArgs = args.concat(moreArgs);
				return f1(...newArgs);
			};
		}
	};
}
const curriedSum = curry((a, b, c) => a + b + c);
const partiallyCurriedSum = curriedSum(1);
// console.log(partiallyCurriedSum(2, 3));

const get = curry((property, object) => object[property]);
const getId = get('id');
const map = curry((fn, values) => values.map(fn));
const getIds = map(getId);

const sum = (a) => (b) => a + b;
const ans = sum(5)(6);

// console.log(ans);

let dragon = (name) => (size) => (element) =>
	name + ' is a ' + size + ' a dragon that breathes ' + element + '!';

// console.log(dragon('polly')('tiny')('fire'));

function sums(a) {
	return function (b) {
		if (b) {
			console.log('A:' + a, 'B:' + b);
			return sums(a + b);
		}
		return a;
	};
}
// console.log(sums(1)(2)(3)(4)(5)(6)());

const addCustomer =
	(fn) =>
	(...args) => {
		console.log('saving customer info..');
		return fn(...args);
	};

const processOrder =
	(fn) =>
	(...args) => {
		console.log(`processing order #${args[0]}`);
		return fn(...args);
	};

let completeOrder = (...args) => {
	console.log(`Order #${[...args].toString()} completed`);
};

// completeOrder = processOrder(completeOrder);
// completeOrder = addCustomer(completeOrder);
// completeOrder('23');

//* Array
const user = ['Erin'];

const append = (arr, el) => [...arr, el];

const newUser = append(user, 'Hank');
// console.log(user);
// console.log(newUser);

//
//* Write a function which can concatenate 2 arrays

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

function merge(arr1, arr2, arr3) {
	return [...arr1, ...arr2, ...arr3];
}

//* Check that user with such name exists in array of objects

const users1 = [
	{
		id: 1,
		name: 'Jack',
		isActive: true,
	},
	{
		id: 2,
		name: 'John',
		isActive: true,
	},
	{
		id: 3,
		name: 'Mike',
		isActive: false,
	},
];

function existingUser(obj, name, exist = false) {
	obj.forEach((user) => (user.name === name ? (exist = true) : exist));
	return exist;
}

// console.log(existingUser(users1, 'Jack'));

const isNameExists = (name, arr) => arr.some((el) => el.name === name);
// console.log(isNameExists('Jack', users1));

// Remove all duplicates in array

const num = [1, 2, 3, 4, 4, 4];

const dupe = (arr) => [...new Set(arr)];

const uniqueArr = (arr) => {
	const res = [];
	arr.forEach((el) => {
		if (!res.includes(el)) {
			res.push(el);
		}
	});
	return res;
};

// Sort the array of numbers
// Sort array of objects by author's lastname

const books = [
	{ name: 'Harry Potter', author: 'Joanne Rowling' },
	{ name: 'Warcross', author: 'Marie Lu' },
	{ name: 'The Hunger Games', author: 'Suzanne Collins' },
];

const uniqueArr2 = (arr) => {
	return arr.reduce((acc, el) => (acc.includes(el) ? acc : [...acc, el]), []);
};

const num2 = [1, 3, 2, 5, 4, 0];

const res = num2.sort((a, b) => a - b);

const sorted = books.sort((b1, b2) => {
	const auth1 = b1.author.split(' ')[1];
	const auth2 = b2.author.split(' ')[1];
	return auth1 - auth2 ? 1 : -1;
});

//* Write a function which implements range

function range(start, end) {
	let res = [];
	for (let i = start; i <= end; i++) {
		res.push(i);
	}
	return res;
}

const fillArr = (start, end) => [...Array(end - start + 1).keys()].map((el) => el + start);

function numRange(start, end) {
	if (start === end) return [start];
	return [start, ...range(start + 1, end)];
}

// console.log(numRange(1, 10));

//* Write a function that implements shuffle

const shuffle = (items) => {
	return items
		.map((item) => ({ sort: Math.random(), value: item }))
		.sort((i1, i2) => i1.sort - i2.sort)
		.map((a) => a.value);
};

const arr19 = [1, 2, 3, 4, 5, 6];

arr19.sort(() => 0.5 - Math.random());

function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		let randomPosition = Math.floor(Math.random() * i + 1);
		let temp = array[i];
		//swap els
		array[i] = array[randomPosition];
		array[randomPosition] = temp;
	}
	return array;
}

//* Find the number of occurrences of min value in array
const arr = [1, 2, 3, 1, 1, 1];
const minVal = Math.min(...arr);

const minArr = arr.filter((el) => el === minVal);

console.log(minArr.length);

// class Employee {
// 	constructor(id, name) {
// 		if (!id || !name) throw new Error('Employee ID and Name required');
// 		this.id = id;
// 		this.name = name;
// 	}

// 	setSalary(salary) {
// 		this.salary = salary;
// 	}

// 	getSalary() {
// 		return this.salary;
// 	}

// 	getId() {
// 		return this.id;
// 	}

// 	getName() {
// 		return this.name;
// 	}
// }

// class Manager extends Employee {
// 	setDepartment(department) {
// 		this.department = department;
// 	}
// 	getDepartment() {
// 		return this.department;
// 	}
// }

// const newEmp = new Employee(569, 'Hank');
// newEmp.setSalary(1000);
// console.log(newEmp.getSalary());

//* Class to Prototype

var Employee = function (id, name) {
	if (!id || !name) throw new Error('Employee ID and Name required');
	this.id = id;
	this.name = name;
};

Employee.prototype.setSalary = function (salary) {
	this.salary = salary;
};

Employee.prototype.getSalary = function () {
	return this.salary;
};

Employee.prototype.getId = function () {
	return this.id;
};

Employee.prototype.getName = function () {
	return this.name;
};

var Manager = function (params) {
	Employee.apply(this, arguments);
	// this.image = params.image;
};

Manager.prototype.setDepartment = function (department) {
	this.department = department;
};
Manager.prototype.getDepartment = function () {
	return this.department;
};

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

//* Write debounce function
// const saveInput = (name) => {
// 	console.log('saveInput', name);
// };

// const debounce = (fn, timeout = 300) => {
// 	let timer;
// 	return (...args) => {
// 		console.log('inner function', args);
// 		clearTimeout(timer);
// 		timer = setTimeout(() => {
// 			fn.apply(this, args);
// 		}, timeout);
// 	};
// };

// const processChange = debounce(saveInput, 2000);
// processChange('foo');
// processChange('foo');
// processChange('foo');

//* Create throttle function

const saveInput = (name) => {
	console.log('saveInput', name);
};

const throttle = (fn, timeout = 300) => {
	let isWaiting = false;
	return (...args) => {
		if (!isWaiting) {
			fn.apply(this, args);
			isWaiting = true;
			setTimeout(() => {
				isWaiting = false;
			}, timeout);
		}
	};
};

const processChange = throttle(saveInput, 2000);
processChange('foo');

processChange('foo');
processChange('foo');
