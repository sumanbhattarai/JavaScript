

// Be familiar with console to know the prototye chain.
// Note : All of the object are actually the instance of the object object.


//Creating an function constructor that can be used as an blueprint.
// Using captial letter is a good practise.
var Person = function (fullName , age ){
    this.fullName = fullName ;
    this.age =age ;
}

//Person is inherited from Prototype.
//Prototype Character of function Constructor

Person.prototype.gender = 'male' ;

//Creating an instance 

var Suman = new Person('Suman Bhattarai' , 19 ) ;
console.log(Suman.fullName) ;
console.log(Suman.gender) ;

//Play with the console to know these prototype chain

console.log(Suman.hasOwnProperty('age')); // It returns true because it is Suman's own property.
console.log(Suman.hasOwnProperty('gender')); // It returns false because the gender is not Suman's own property since it is inherited from prototype.

console.log(Suman instanceof Person) ; // It returns true because Suman is the instance of Person.

// Creating an Array

var x = ['Suman' , 'Sujan' , 'Saroj'] ;
console.log(x) ; // You can see in the console that array also have prototype. So it is an object.
// Hence , everything in JS is an object.
//Array 'x' has length properties . We can see that in console.

console.log(x.length); // It returns 3 .