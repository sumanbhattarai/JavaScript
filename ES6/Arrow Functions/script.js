


// Simple example of Arrow Function

var name = () => 'Suman' ;
console.log(name());


// In ES5

var years5 = [ 1998 , 2000 , 2017 , 1999 , 1980 ] ;

var ages5 = years5.map( function(el){
    return 2018 - el ;
});

console.log(ages5) ;




// In ES6
let years6 = [ 1998 , 2000 , 2017 , 1999 , 1980 ] ;

let ages6 = years6.map(el => 2018-el); // It is much more easier in ES6 using this arrow function.
// Arrow function is anonymous.
// It doesn't contain function and return keyword.
// It is similar to lamda in python.
console.log(ages6);

// Lets mutate the age6 .

ages6 = years6.map((el , index)=> `Age is ${2018-el} and index is ${index + 1}.`) ;
// I used i ndex+1 to start the indexing with 1 not by 0.
console.log(ages6);


// We can also use block of code inside {} in arrow function.
// Now we can use return keyword inside the {} .

ages6 = years6.map((el , index)=>{
    const currentYear = new Date().getFullYear() ;
    const age = currentYear - el ;
    return `Age is ${age} and index is ${index + 1}.`
});
console.log(ages6);



