

console.log(this) ; // this keyword in the global execution state is very simply the window object.



info(1999) ;
function info(year)
{
    console.log("Age is : " + (2018 - year)) ;
    console.log(this); // It is again the window object since it is a regular function code and not a method.

}



//Method

var detail = {
    myName : 'Suman' ,
    myYear : 1999 ,
    myAge : function()
    {
        console.log(2018 - this.myYear);
        console.log(this); // This keyword now refers to an object.
        Inner();
        //Nested Function
        function Inner()
        {
            console.log(this); // In regular function code , the this keyword is always simply the window object.
        }
    }
}

detail.myAge();



// Borrowing method 



var Suman = {
    fullName:'Suman Bhattarai' ,
    year:1999 ,
    age : function()
    {
        console.log('Age of '+ this.fullName +' is :' + (2018 - this.year));
    }
}

Suman.age();


var Nibesh = {
    fullName: 'Nibesh Thapa Magar' ,
    year: 2000 
}

Nibesh.age = Suman.age ;
Nibesh.age();


// Note : Value of this varibale is assigned only when the method in invoked.

