

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


//ES5

function isAdult(limit)
{
    var arr = Array.prototype.slice.call( arguments  , 1 ) ; // We did this to exclude 18.
    arr.forEach(function(el){
        console.log( el >= limit);
    });
    

}

isAdult(18 , 20, 32 , 12 , 45 , 15 , 7) ;



// ES6

function isAdult6 (limit , ...years )
{
    years.forEach( el => console.log(el >= limit));
}

isAdult6(18 , 20 , 32 , 12 , 45 , 15 , 7) ;


