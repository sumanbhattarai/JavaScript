
// The Spread Operator

// simple function

function sum( a , b , c , d) 
{
    return a + b + c + d ;
}

var result = sum(1 , 2 , 3 , 4 , 5) ;
console.log(result) ;

// Lets pass an array instead of separate variable

var input = [ 2 , 5 , 10 , 5] ;


// Using ES5 
var sum5 = sum.apply(null , input) ;
console.log(sum5) ;


// We can use spread operator to spread the array , nodelists etc.

const sum6 = sum(...input) ;
console.log(sum6);

// Some other examples to show the use of the spread operator .

const terai = [ 'Chitwan' , 'Nawalparasi' , 'Parsa'] ;
const hilly = [ 'Pokhara' , 'Kathmandu' , 'Bhaktapur'] ;
const nepal = [ ...terai , 'Lalitpur' , ...hilly] ;
console.log(nepal);