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

//* Arrow Functions
/* 
1. Explain the syntactical features of an arrow function
.- can avoid return statement and parenthesis when having a single argument
2. Why does "this" not work in an arrow function
.- We already have a class keyword to deal with classes, so we don't need the function to act as a class;
.- Will point to window object
3- How can you handle argument object like functionality in an arrow function?
.- By using rest parameter
*/

//* Closures
/* 
1. How can you access private variables or a function outside the scope?
.- const outer = () => () => console.log('inner called');
2. Explain closure advantages.
.- Main advantage is that any private variable for a certain scope can be accessed, whilst keeping
it private so that the variable is protected from accidental value changes.
*/

//* How can sum(5)(6) = 11?
/* 
const sum = (a) => (b) => a + b;
const ans = sum(5)(6);

1. What is function currying?
.- A way to call inner functions where you can pass arguments partially or pass multiple arguments
in a function but 1 argument at a time.
2. What will this statement do? 
const multi = (a) => (b) => (c) => a * b * c;
.- You have a function with an inner function, inside an inner function with a return statement.
Will return multiplied values of three parameters
3. Explain practical usage of currying
.- Currying solves various purposes like passing partial params or avoiding unwanted repetitions.
*/

//* Iterables & Iterators
/* 
1. What is the purpose of the iterator
.- To make a data structure iterable thats not, i.e object literals 
2. How do you create an iterator
.- Symbol.iterator method must be implemented which returns an iterator object 
and also have a next() method which returns the object
3. Explain a practical use of an iterator
.- The use of an iterator is not very prompt when used in the same scope.
Useful in a Custom Data structure thats needs a "for of" loop; creating a pointer to use within the data structure
*/

// * Generators
/* 
1. What are Generator functions, explain the syntax
.- Generator functions gives you a way to pause and continue a process
const gen = function* () {
	console.log('Hello');
	yield 'Yield Value';
	console.log('World');
	yield;
	console.log('!');
};
const gObj = gen();
console.log(gObj.next());

2. Which is the right syntax. function* (){} or function *(){}
.- Both work fine; doesn't matter; function* is common syntax
3. Explain the three methods of generator functions
.- next() moves pointer to next line, return() terminates function, throw() helps raise an error
4. Explain use of yield*
.- yield* is used to call generator function from another; recursion
5. Can you prevent return() from terminating the generator?
.- Yes, via try catch; switch cases or if statements
*/

//* Memory Management | Garbage Collection
/* 
?1. How does Garbage Collection work in javascript?    
.- "Mark and Sweep" algorithm is used, will start from the global object and mark reference values
and clears unreachable values or locations.
?2. Explain Mark and Sweep algorithm. 
.- It begins with the root element and starts marking referenced values, and clearing unreferenced values.
?3. Which situation can create a memory leak?
.- When theres a circular reference, and one object is set to null; losing the reference. doesn't occur in newer browsers.
*/

//* Error Handling
/* 
?1. When do you need try catch
.- At runtime when a code is executed and a portion needs to  be managed properly 
so the program doesn't stop running.
?2. How can you generate an error
.- By using throw new Error class
?3. Can you generate Syntax or Reference Errors?
.- Yes, via throw statement
?4. Whats the purpose of the finally block?
.- It contains the code thats always executed regardless of error.
?5. How can you refer to the name or description of error?
.- Using the passed argument followed by .name or .message; err.name err.message
?6. Can we have a finally block without catch block?
.- Yes; catch block not entirely necessary
*/
