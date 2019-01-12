// Hositing

//Function Declaration
function info(name)
{
    console.log(name);
}

info('Suman'); // It will be executed.

// In JS , it will also work when we declare function after calling function.


place('PKR') ;
function place(address)
{
    console.log(address);
}

//But samething doesnot happen with function expression.

var age = function (year)
{
    console.log(2018 - year) ;
}
age(1999); //It will work.

//If we call the function first, then it will throw an error.

// gender('Male') ;
// var gender = function(sex)
// {
//     console.log(sex);
// }



var nickName = 'SB' ;
function title ()
{
    var nickName = 'SBofficial' ;
    console.log(nickName) ;  //It will display 'SBofficial'.
}

title();
console.log(nickName); //It will display 'SB' as it has global scope.