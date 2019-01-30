
// Difference between ES5 and ES6 while declaring varibles .

// In ES5 we used , var keyword to declare variable.
// In Es6 we will use let and const keyword to declare the variable.

// ES5 example.

var name = 'Suman' ;
console.log(name); // It will returns Suman.
name = 'Sujan' ; // We can mutate the value in ES5 .
console.log(name); // It will return Sujan.


// ES6
// Varibles declared using let keyword can also be mutated but not that with const keyword.
let age = 19 ;
console.log(age);
age = 20 ;
console.log(age);

/*

const dob = 1999 ;
dob = 2018 ;
console.log(dob);  // remeber variable declared with const keyword can never be mutated.

*/



// Another major differences between var and let,const is that var has function-scoped but let and const has block-scoped.

// ES5

function checkAge(fname ,age)
{
    if(age<18)
    {
        var message = 'You are Child' ;
    }
    else
    {
        var message = 'You are adult' ;
    }
    // the varible message has function scope so it is accesible inside the checkAge().
    console.log( fname + ', ' + message + '.') ; // It will work.
    
}

checkAge('Suman' , 19) ;


//  ES6 
// let and const have block scope so they are not accessible outside the block .

/*
function returnAge(fname ,age)
{
    if(age<18)
    {
        const message = 'You are Child' ;
    }
    else
    {
        const message = 'You are adult' ;
    }
    // the varible message has block scope so it is accesible inside the if block only .
    console.log( fname + ', ' + message + '.') ; // It will work.
    
}

returnAge('Suman' , 19) ;

*/



let i = 20 ;
for( let i = 1 ; i <=5 ; i++)
{
    console.log(i); // it will return 1 , 2 , 3 ,4 ,5
}
console.log(i) ; // It will return 20 .
