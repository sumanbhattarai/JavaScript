

// IIFE stands for Immidiately Invoked Functions Expression.
// IIFE is very important in the context of data hiding and privacy.


// These type of fuctions are executed only when they are called.
function info()
{
    console.log('Normal Functions') ;
}

info();


// IIFE example

(function(){
    console.log('IIFE');

}());

// We can also pass arguments to IIFE

(function(name , age){
    console.log('Hey ' + name + ', ' + 'you are ' + age + ' years old.');

}('Suman' , 19));