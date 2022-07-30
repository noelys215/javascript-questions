//* Object Literal
let tV = 'pCode';
let product = {
	[tV]: 1001,
	pName: 'Mango',
	getDate() {
		console.log(this.pCode, this.pName, product.tV);
	},
};
/* 
?1. Can you have dynamic keys with object literals?
.- Yes, with square brackets
?2. How can you add read only properties in an object
*/
const proto = Object.defineProperty({}, 'pCode', {
	writable: false,
	configurable: true,
	value: 2001,
});

const obj = Object.create(proto);
obj.pCode = 3001;
/*
?3. What is property value short hand?
*/
let pCode = 1001;
let pName = 'Kiwi';
let obj1 = {
	pCode,
};
/*
 */

//* What is this?
/* 
?1. Output? function test(){console.log(this)}
.-  Window Object/Global Object
?2. What does this point to in an arrow function?
.-  Window Object/Global Object
*/

//* Call, Apply, Bind
/* 
?1. Difference between the three?
.-  call() takes normal params, apply() takes a this ref an array of params; 
bind() doesn't execute function immediately; it returns a bound reference.
?2. Can you assign a value to "this" with an "=" operator?
.- No
*/

//* Classes
class House {
	constructor(nDoors, windows) {
		this.nDoors = nDoors;
		this.windows = windows;
	}
	showData() {
		console.log(`Doors: ${this.nDoors}`, `Windows: ${this.windows}`);
	}
	static appVer = 1.6;
	static test() {
		console.log('Static');
		console.log(this.appVer);
	}
}

House.test();

/* 
?1. How can you create a class?
.-  see above
?2. When is the constructor called?
.-  When the an instance of a class is created/initialized
?3. Can we have dynamic properties/methods
.-  Yes, within square brackets
?5. What are static methods in a class?
.-  Methods that can be called directly from class instead of making a separate instance.
*/

//* Inheritance
class Child extends String {
	noc(str) {
		console.log(str.length);
	}
}
const obj5 = new Child('Test String');
obj5.noc('new string here');
console.log(obj5.toUpperCase());
/* 
?1. How do you inherit a class?
.-  By using extend keyword
?2. What is sub-classing
.-  Another word for inheritance
?3. Whats the purpose of super keyword?
.-  Helps access methods of parent class/ call its constructor
    super() - calls parent constructor
    super.method() - calls parent method
    super.property - access parent property
?4. How will you override a method
.-  By using super keyword
?5. How can you extend a built in class?
.-  using extend keyword
*/

//* Destructing Objects
/* 
?1. Why destructure object?
.-  Useful when only certain data retrieved is needed from a large data file.
?2. 
.- 
*/

//* Class Accessors - Getter/Setter
/* 
?1. 
.- 
?2. 
.- 
?3. 
.- 
?4. 
.- 
?5.
.- 
*/
