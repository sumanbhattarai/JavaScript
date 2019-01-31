

//ES% way to define default parameters
function info ( name , gender , address , roll )
{
    if( address === undefined)
    {
        address = 'Pokhara' ;
    }
    else{
        address = address ;
    }

    // Diff way of declaring if else
    roll === undefined ? roll = 0 : roll = roll ;


    this.name = name ;
    this.gender = gender ;
    this.address = address ;
    this.roll = roll ;
}

var student1  = new  info( 'Suman' , 'male') ;
console.log(student1) ;
var student2  = new  info( 'Abiral' , 'male' , 'Lekhnath' , 3) ;
console.log(student2) ;


// Now in ES6 is is much more easier and quicker to do this .

function info6 ( name , gender , address = 'Pkr' , roll = 0)
{
    this.name = name ;
    this.gender = gender ;
    this.address = address ;
    this.roll = roll ;
}

var std1 = new info6( 'Sujan' , 'male' );
console.log(std1);
var std2 = new info6( 'Sandesh' , 'male' , 'Lekhnath' , 30 );
console.log(std2);