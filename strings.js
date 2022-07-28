//* Strings Basics
/* 
?1. Explain various ways to declare a string variable
.- 'Hello'  "Hello" `Hello`
?2. How will you deal with unicode chars?
.-  with \u  i.e  "\u00A9"
?3. Show syntax for long unicode chars
.- "\u{1f602}"  Need to use {}
*/

//* Template Strings
/* 
?1. WHat is a template literal?
.- A new way to declare string with backtick.
?2. How do you display a value or expression inside template string?
.- using ${value}
?3. Whats the advantage of using template strings?
.- You can execute expression without end of backtick, strings format is displayed as is.
*/

//* String .length
/* 
?1. Explain indexOf() and lastIndexOf() method on strings
.- Searches for index of string given.
?2. What is the difference between search and indexOf()
.- indexOf() can have a start position, just cant be used for regex, search method can take regex
*/

//* Extraction Methods
/* 
?1. Output? let str = "Hello World"; str.slice(-5,-2)
.- Wor
?2. Whats the difference between substr() and substring()
.- str.substr(start, noOfChars); str.substring(start, endIndex)
?3. Output? let str = "This is a test"; str.substring(-5)
.- entire string, substring doest take negative values
?4. Output? let str = "This is a test"; str.substring(3,3)
.- None, start and end is similar
?5.Output? console.log(str.charAr())
.- Display single char at specific index
*/

//* Date & Time Basics
/* 
?1. Explain different ways to create date and time.
.-  new Date(year,mon,day,hrs,mins,secs, ms); new Date(ms); new Date('string')
?2. Output? new Date(2020,08,23)
.- July 23 2020
?3. Explain ISO standard
.- Year - YYYY; Month - MM; Day - DD; YYYY-MM-DDTHH:mm:ss:sssZ
*/

//* Date Methods
/* 
?1. Get a char month.
.-  getMonth()
?2. Find date 50 days prior to given date.
.-  setDate(getDate()-50);
*/

//* Time Methods
/* 
?1. Calculate date difference in days.
.-  let dt = new Date(2020,07,25)
.-  let dt1 = new Date(2020,07,23)
.-  let n = dt.getTime() - dt1.getTime();
.-  n = (n/1000)/3600
?2. How cna you change hours or minutes in time.
.-  setHours() setMinutes()
*/
