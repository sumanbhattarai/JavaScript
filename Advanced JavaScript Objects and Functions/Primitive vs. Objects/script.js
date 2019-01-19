

// Primitive

var x = 5 ;
var y =  x ;
x = 10 ; //  Mutating valuw of x 

console.log(x) ; // it will return 10 .
console.log(y) ; // It will return 5 .


// Objects

var info = {
    num : 10 
}

var detail = info  ;
info.num = 50 ;
console.log(info.num) ; // It will return 50.
console.log(detail.num) ; // It will also return 50.


// Functions
var rollNo = 38 ;
function mutate(a ,b) 
{
    a = 40 ;
    b.num = 20 ;

}
mutate(rollNo , info) ;
console.log(rollNo) ; // It will return 38 .
console.log(info.num) ; // It will return 20.