

// Function Constructors in ES5

var info = function(name , gender , dob) {
    this.name = name ;
    this.gender  = gender ;
    this.dob = dob ;
}

// Prototype properties of function Constructors

info.prototype.calcage = function( dob)
{
    console.log( 2018 - this.dob ) ;
}

var SB = new info('Suman' , 'male' , 1999 );
SB.calcage();


// Using classes in ES6 
// Class Declarations are not hoisted while Function Declarations are. If you try to access your class before declaring it, ReferenceError will be returned.

class detail {
    constructor(name , gender , dob )
    {
        this.name = name ;
        this.gender  = gender ;
        this.dob = dob ;

    }

    calcage()
    {
        console.log( 2018 - this.dob ) ;
    }

    // Lets create a static method here.
    // Note : static method can never be inherited to instances.

    static try()
    {
        console.log(' I am static method.') ;
    }
}

// Creating the instance of this class.

const std = new detail('Sujan' , 'male' , 1998 ) ;
std.calcage();

 // std.try(); // It will throw an error since instances donot have access to the static method.
 // We can call the static method as :

 detail.try();