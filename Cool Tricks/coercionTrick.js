
// Wired JavaScript Coercion

console.log(('b'+'a'+ +'a'+'a').toLowerCase()); 
//Output is banana

/*
The middle + 'a' is a unary coercion of 'a' into a number as it is proceded by another + , 
which fails and returns NAN , which then is concatenated in and converted to lowercase.
*/