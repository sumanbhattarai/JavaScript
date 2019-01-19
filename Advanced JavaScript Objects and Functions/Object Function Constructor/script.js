


// Function Constructors

var Person = function( name , dob , job )
{
    this.name = name ;
    this.dob = dob ;
    this.job = job ;
    this.age = function()
    {
        return 2018 - this.dob ;
    }
}


// Prototype Property of function Constructor
Person.prototype.address = "Pokhara" ;
Person.prototype.gender = "male" ;

// Creating other instances

var Suman = new Person( "Suman" , 1999 , "Software Engineer") ;
console.log(Suman.name) ;
console.log(Suman.job);

var Saroj = new Person( "Saroj" , 2000 , "AeroSpace Engineer") ;
var Sujan = new Person ( "Sujan" , 1998 , "Software Engineer") ;
console.log(Saroj.dob) ;
console.log(Saroj.age()) ;
console.log(Sujan.age());
console.log(Saroj.gender);
console.log(Suman.gender);
console.log(Sujan.address) ;