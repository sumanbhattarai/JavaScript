

function data()
{
    console.log(arguments);
}
data( 1, 5 , 19 , 38);

//ES5

function data5()
{
    var arr = Array.prototype.slice.call(arguments) ;
    arr.forEach(function(cur){
        console.log(cur);
    });
}
data5( 3 , 7 , 1  , 50 );


// ES6

function data6( ...input )
{
    console.log(input) ;
}
data6(3, 43, 54, 234) ;
