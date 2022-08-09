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

completeOrder = processOrder(completeOrder);
completeOrder = addCustomer(completeOrder);
completeOrder('23');

//* Array
const user = ['Erin'];

const append = (arr, el) => [...arr, el];

const newUser = append(user, 'Hank');
// console.log(user);
// console.log(newUser);
