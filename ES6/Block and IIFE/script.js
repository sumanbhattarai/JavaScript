
// Block and IIFE in ES6

// Perviously in ES5 we did IIFE like this :

(function(){
    var a = 1 ;
})();

// console.log(a) ; // It will give you error since a is not accesible outside of the function.

 // Now is ES6 , we can do it like this :

 {
     var name = 'Suman';
     let no = 10 ;
 }
 console.log(name) ; // It will return Suman since var has function scope not block scope.
 // console.log(no); // It will alsp give error since let has block scope and it is not accessible outside {} .