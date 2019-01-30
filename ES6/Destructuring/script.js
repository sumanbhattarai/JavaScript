

// Destructuring in ES5 

var about5 = ['Suman' , 1999] ;
var name5 = about5[0];
var dob5 = about5[1] ;
console.log(name5);
console.log(dob5);

// It is quiet impractical. So lets destructure it using ES6

const [name6 , dob6 ] = ['Suman' , 1999] ;
console.log(name6) ;
console.log(dob6);

// Now lets destructure an object

const info = {
    name : "Suman Bhattarai",
    dob : 1999 
};

/*
const { name , dob } = info ; 
console.log(name) ;
console.log(dob) ;
*/

// If want to use different variables name then :

const { name : n , dob : d } = info ;
console.log(`Your name is ${n} and you are born in  ${d}.`) ;



// Lets create a function 
function details(name , year)
{
    const age = 2018 - year ;
    return [ name , age ] ;
}

const[ yourName , yourAge ] = details('SB' , 2000);
console.log(`${yourName}, you are ${yourAge} years old.`);


