

var info = {
    birthYear: 1999 ,
    age : function(birthYear)
    {
        return 2018 - birthYear ;
        //Here if we use this.birthYear , it will take 1999 as birthYear.
    }
}

console.log(info.age(2010));
//It will display 8.

info.name = 'Suman';
console.log(info);


// this pointer

var about = new Object();
about.name = 'SB' ;
about.birthYear = 1999 ;
about.calculateAge = function(){
    this.age = 2018 - this.birthYear ;
}

about.calculateAge();
console.log(about);

