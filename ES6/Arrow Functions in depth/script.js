

// Creating an object

var Person = {
    name: 'Suman' ,
    dob : 1999 ,
    calcage : function()
    {
        age();
        function age()
        {
            console.log(this.name + ' , your age is : ' + (2018-this.dob) +'.') ;
        }
        
    }

};

Person.calcage(); // It will return ' undefined , your age is : NaN. '
// It is because the this keyword used there doesnot refer to the object instead it points to the window object.

// In order to do this we have to do something like this:
// ES5 
var Person1 = {
    name: 'Suman' ,
    dob : 1999 ,
    calcage : function()
    {
        var self = this ;
        age();
        function age()
        {
            console.log(self.name + ' , your age is : ' + (2018-self.dob) +'.') ;
        }
        
    }

};

Person1.calcage();  // It works as we want because the this keyword in the calcage() returns the Person1 object and it is assigned to self variable and we used the sa,e self variable in the nested function.

// Lets do the samething with ES6
var Person6 = {
    name: 'Suman' ,
    dob : 1999 ,
    calcage : function()
    {
        let age = ()=>
        {
            console.log(this.name + ' , your age is : ' + (2018-this.dob) +'.') ;
        }
        age();
        
    }

};

Person6.calcage();  // it works because when we use arrow function it takes the value of this keyword from its nearby enviroment.


// Making calcage function also an arrow function and see the result.

var Person66 = {
    name: 'Suman' ,
    dob : 1999 ,
    calcage : ()=>
    {
        let age = ()=>
        {
            console.log(this.name + ' , your age is : ' + (2018-this.dob) +'.') ;
        }
        age();
        
    }

};

Person66.calcage();  // It won't work as our wish because the this keyword now points to the global object since we know that the arrow funtion takes the value of this keyword from its nearby surroundings.



// Lets try some other cool ways :


// ES5 

var info = function(name)
{
    this.name = name ;
}

// Prototype property of the info

info.prototype.myFriend = function(friendList){

    var arr = friendList.map(function(el){
        console.log(this.name + ' is a friend of ' + el) ;
    }.bind(this));

} 

var SB = new info('Suman');
friendList = [ 'Nibesh' , 'Elope' , 'Amit' , 'Devraj'] ;
SB.myFriend(friendList) ; // It is working because of that bind. If it was  not there then output be like 'undefinedi s a friend of ........ '


// ES6

var info6 = function(name)
{
    this.name = name ;
}

// Prototype property of the info

info6.prototype.myFriend = function(friendList){

    var arr = friendList.map((el)=>`${this.name} is a friend of ${el}`);
    console.log(arr); 

} 

// We can create instance like this as well.
new
info6('Suman').myFriend(friendList);




