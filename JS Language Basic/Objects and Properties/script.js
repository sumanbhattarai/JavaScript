

//Creating objects

var info = {

    firstName : 'Suman' ,
    lastName : 'Bhattarai' ,
    age : 19 
    
}

console.log(info) ; 
console.log(info.firstName);
console.log(info['age']);
//other way

var name = 'firstName'  ;
console.log(info[name]);

//mutate
info['age'] = 18 ;
info.firstName = 'SB' ;
console.log(info) ;

//Another of creating objects

var about = new Object() ;
about.name = 'Suman' ;
about.address = 'Pokhara' ;
about['age'] = 19 ;
console.log(about);

