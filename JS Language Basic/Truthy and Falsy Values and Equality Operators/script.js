/*
Truthy and falsy values and equality operator

falsy values: undefined , null , 0 , '' , NaN
truthy values: NOT falsy values

*/


//It will print variable is not defined.
var x ;
if(x)
{
    console.log('Variable is defined.') ;
}
else
{
    console.log('Variable isnot defined.')
}

//It will print variable is defined.
x =56 ;
if(x)
{
    console.log('Variable is defined.') ;
}
else
{
    console.log('Variable isnot defined.');

}

//It will print variable isnot defined because 0 is a falsy value as mentioned above on the top comments.
x = 0;
if(x)
{
    console.log('Variable is defined.') ;
}
else
{
    console.log('Variable isnot defined.')
}

//In order to cope with this.
//It will print variable is defined.

x =0 ;
if(x || x===0)
{
    console.log('Variable is defined.') ;
}
else
{
    console.log('Variable isnot defined.')
}



//empty string
//be sure there is no space between the quote ''. Otherwise it will display variable is defined.
// Varible is not defined is printed.

var name = '' ;
if(name)
{
    console.log('Variable is defined.') ;
}
else
{
    console.log('Variable isnot defined.') ;
}

//Equality Operators
// === is strict equality operator
var height = 5.6 ;
if(height == '5.6')
{
    console.log('== Operator does type coercion');
}
if(height === '5.6')
{
    console.log('It wll not be printed because === doesn\'t does type coercion.');
}

//Note = operator is used to assign the value not for the comparison.