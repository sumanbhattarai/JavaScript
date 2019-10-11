
const x = 10 
console.log(typeof (typeof x ))
// It gives string since typeof x is number and typeof number is string.

console.log([]==[])
// It is false since array is also an object in JS

console.log("55"+5); // It gives 555.
console.log("55"-5); // It gives 50.

function sum()
{
    return true;
}
console.log(typeof sum); // Function
console.log(typeof sum()); // boolean

function demo()
{
    return(()=>'suman');
}
console.log(typeof demo()); // function

function demo2()
{
    return(()=>1)();
}
console.log(typeof demo2()); // number