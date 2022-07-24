//* DIfference between Null & Undefined
let x = undefined;
// console.log(x);
// console.log(typeof x);

/* 
1. What is undefined
- A variable without an assigned value
2. What is the output of undefined == nul; underlined === null
- First is true; its a simple comparison, second is false; different data types
"undefined" itself is a datatype; "null" is a primitive data type
3. Can you explicity assign "undefined" to a variable
- Yes
*/

//* Function Scope vs Block Scope
let y = 10;

function a() {
	y = y + 5;
}

function b() {
	console.log(y);
}

/* 
1. What is hoisting?
.- Behind the scene process bring the DECLARATION to the top, not the assignment
2. How does block scope work?
.- Anything in {},could be an if condition, loop, etc is a block created which creates a separate
scope for declarations existing within that block
3. What is the scope of a variable?
.- The availability, visibility or lifetime of a variable
*/

//* What is Automatic Semicolon Insertion ASI

/* 
1. Should you terminate all lines by a ";"
.- Its a good practice to add a semicolon, however if you don't, make sure all lines are correct
2. Can useStrict or strict mode change behavior of ASI
.- No, it doesn't change the behavior, it doesn't force you to use semicolons
*/

function test() {
	return {
		a: 5,
	};
}

const obj = test();

//* Difference between Rest and Spread
/* 
1. Can we use arguments object in arrow function
.- NO, only in traditional ways of writing functions ie declarations
2. Which is the best way to create a new array with assignments
.- Using the spread operator
3. How can you handle the "n" number of params passed to a function
.- use Spread operator 
4. Can the rest operator be placed anywhere in the function param list?
.- We cannot have rest param in the beginning of the param list, must be at end.
*/

//* Infinity vs -Infinity
/* 
1. What will be the output; console.log(1/0)
.- Infinity
*/

//* When do you get NaN as output
/* 
1. What's the output? console.log(Nan===Nan)
.- False
2. What's the difference between isNan() & isFinite()
.- isNan() checks whether value is Not-A-Number 0r not
.- isFinite() checks for NaN as well as Infinity values
*/
