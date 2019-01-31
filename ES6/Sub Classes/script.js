

// Classes and Subclasses are possible after ES6.

// Lets create a Person Class.

class Person {
    constructor( name , gender , dob ){
        this.name = name ;
        this.gender = gender ;
        this.dob = dob ;
    }

    calcage()
    {
        const age = new Date().getFullYear() - this.dob ;
        return age ;
    }
}

// Lets create a subclass Student that inherites the class Person .
// Note : extends keyword is used to do this .

class Student extends Person {
    constructor( name , gender , dob , grade , faculty )
    {
        super( name , gender , dob ) ;
        this.grade = grade ;
        this.faculty = faculty ;
    }

    
}

const SB = new Student('Suman' , 'male' , 1999 , 'Third Semester' , 'Software Engineering') ;
console.log(SB);
console.log(`Your age is : ${SB.calcage()}`) ;
