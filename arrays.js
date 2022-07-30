//* Array Traversal
// let arr = [4, 7, 9];
// arr.forEach((el, i) => console.log(el, i));

/* 
?1. What is the difference between for in and for of
.- For in displays index, for of displays values
?2. Whats the output? 
? let arr = [7,0,9]; console.log(arr[arr.length])
.- undefined, theres no 3 index.
*/

//* Add, Remove, Insert, Replace Array elements
/* 
?1. Whats the difference between push and unshift?
.- Push adds to end end, unshift adds to beginning.
?2. Whats the difference between pop and shift.
.- Pop removes from the end, shift removes from the beginning.
?3. How can you insert an element at a given position?
.- via splice(0,0,"New")
?4. How can you remove an element at a given position?
.- via arr.spice(2,0) without third param
?5. What does splice method return?
.- It returns the deleted items.
?6. If theres no elements to delete, what does splice return?
.- An empty array.
*/

//* How to perform search in an array?
// let arr = [4, 7, 9, 7];
// console.log(arr.indexOf(9));
// console.log(arr.lastIndexOf(7));
// console.log(arr.includes(2));
// const rVal = arr.filter((el) => el > 4);
// console.log(rVal);
/* 
?1. Whats the difference between find() and filter()
.- Find returns single val first match, filter returns an array of matching values.
?2. If theres no value to return, what will findIndex() return?
.- undefined
?3. What is the difference between indexOf() and Includes()?
.- indexOf() returns index, includes() returns boolean
?4. How will you search multiple values in an array?
.- filter()
*/

//* Whats the use of map()?
let arr = [4, 7, 9, 7];
const mapped = arr.map((el) => Math.pow(el, 2));
/* 
?1. Find length of each el in a new array.
.- arr.map(el => el.length)
?2. Find square root of each el
.- arr.map((el) => Math.sqrt(el));
?3. Fetch all pName from a nested object in a separate array.
.- arr.map(el => el.pName)
*/

//* How to flatten array?
let arr1 = [2, 4, 6, 8];
let res = arr1.reduce((acc, el, i, arr) => {
	acc += el;
	if (i === arr.length - 1) {
		return acc / arr.length;
	}
	return acc;
});
/* 
?1. How to flatten array?
.- arr.reduce((acc, el) => acc.concat(el), [])
?2. Get sum of a key field of an object literal.
.- arr.reduce((acc, el) => acc + el.salary, 0)
?3. Find average value of all elements
.-
?3. Whats the difference between reduce and reduceRight?
.- reduce loops from 0th to last el, reduce right from last to 0th
*/

//* How to sort array?
let prods = ['Banana', 'Orange', 'Grapes', 'Apple'];
prods.sort((a, b) => (a < b ? -1 : a < b ? 1 : 0));
console.log(prods);
/* 
?1. What will be the output if array has undefined whilst sorting.
.- undefined will placed at the end of array; its never sorted
?2. How will you sort an object literal?
.- .sort((a,b)=> a.salary < b.salary ? -1 : a.salary > b.salary ? 1 : 0)
?3. Sort in desc order 
.- arr.sort((a, b) => (a < b ? 1 : a > b ? -1))
?4. How will you sort a numeric array?
.- arr.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0))
*/

//* Destructuring
let distro = [80, 90, 93, 26];
let [a, , c, d] = distro;

/* 
?1. what is destructing
.- Extracting data from array or object to individual variables
?2. Swap values via destructuring
.- let a = 5; let b = 5;  [a,b] = [b,a]
?3. let [a,c,b] = [5,,7]
.- b will be undefined
?4. how to set default value whilst destructuring?
.-  let [a,c = 0,b] = [5,,7]
*/
