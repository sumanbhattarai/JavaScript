

// ES5 

var fname  = 'Suman' ;
var lname = 'Bhattarai' ;
function calcage(dob)
{
    return 2018 - dob ;
}

console.log( fname + ' ' + lname + ' is ' + calcage(1999) + ' years old.');
// It looks annyoing so in ES6 we can do the same thing as :

// Backticks `` is used.
//${} is called template literals expression.

console.log(`${fname} ${lname} is ${calcage(1999)} years old.`) ;


// Some other properties of strings in ES6 .

var fullname = `${fname} ${lname}` ;
console.log(fullname) ; // It will returns Suman Bhattarai.

console.log(fullname.startsWith('Su')); // It will return true since fullname starts with Su.
console.log(fullname.startsWith('su')); // It will return false since fullname doesn't start with Su.

console.log(fullname.endsWith('i')) ;// It will return ture .
console.log(fullname.endsWith('ai')) ;// It will return ture .

console.log(fullname.includes(' ')) ; // It will return true since the fullname contains a space.
console.log(fullname.includes('nB')); // It will return false.
console.log(fullname.includes('n B')); // It will return true.


