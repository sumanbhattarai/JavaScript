

// It is completely different from Function Constructors.
// Function Constructor way is more popular than this.

// Creating and Info Proto
// No need to capitalise the first letter since it is not function prototype.
// Object.create
var infoProto = {
    age: function()
    {
        return 2018 - dob ;
    }

};

var Suman = Object.create(infoProto) ;
Suman.fullName = 'Suman Bhattarai ' ;
Suman.dob = 1999 ;

console.log(Suman) ; // Check the console to know about the Object.create .

// Another way of doing this.

var Sujan = Object.create(infoProto, {

    fullName : { value: 'Sujan Bhattarai' },
    dob : { value: 1998 } 


});

console.log(Sujan);

// It is an easier way than function constructors. 
// Because it allows us to directly specify which object should be prototype.
