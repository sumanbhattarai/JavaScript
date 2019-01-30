

// Lets create an array of ages.

var ages = [ 23 , 12 , 56 , 38 , 4 , 13 , 9 , 18 , 17 , 20] ;
// Lets find out the position and age which is above 50.

// ES5

var result = ages.map(function(el){
    return el > 50 ;
});

console.log(result);
console.log(result.indexOf(true)) ;
console.log(ages[result.indexOf(true)]) ;


// ES6

console.log(ages.findIndex(el => el >50));
console.log(ages.find(el => el>50));