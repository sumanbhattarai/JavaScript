

// Lets create the data 

class data {
    constructor( name , buildYear)
    {
        this.name = name ;
        this.buildYear = buildYear ;
    }
}

class Parks extends data {

    constructor( name , buildYear , noOfTress , parkArea)
    {
        super( name , buildYear) ;
        this.noOfTress = noOfTress ;
        this. parkArea = parkArea ;
    }

    treeDensity()
    {
        const density = this.noOfTress / this.parkArea ;
        console.log(`${this.name} park has a tree density of ${density}.`)
    }

    calcage()
    {
        return ( 2018 -  this.buildYear);
    }



}

class Streets extends data {

    constructor ( name , buildYear , length , size = 3 )
    {
        super(name , buildYear) ;
        this.length = length ;
        this.size = size ;
    }

    classification()
    {
        const categories = new Map() ;
        categories.set(1 , 'tiny') ;
        categories.set(2 , 'small') ;
        categories.set(3 , 'normal') ;
        categories.set(4 , 'big') ;
        categories.set(5 , 'huge') ;

    }

}

// three diff parks
const p1 = new Parks ( 'Chitwan National Park' , 1930 , 1204 , 0.9) ;
const p2 = new Parks ( 'SheyPhoksundo National Park' , 1954 , 747 , 3.3) ;
const p3 = new Parks ( 'Rara National Park' , 1968 , 873 , 2.8) ;


// four diff streets
const s1 = new Streets ( 'Pulchwok' , 1921 , 23 , 4) ;
const s2 = new Streets ( 'Newroad' , 1901 , 19, 1) ;
const s3 = new Streets ( 'SaurahaStreet' , 1897 , 38) ;
const s4 = new Streets ( 'SahidChowk' , 1934 , 4.5 , 2) ;

//all park
const allParks = [ p1 ,p2, p3] ;
//all streets
const allStreets = [ s1 ,s2, s3 , s4] ;


// Function to see the anual report 

function parksReport(p)
{

console.log('-------- Parks Report ----------') ;
    

    // Desity 
    p.forEach(el => el.treeDensity());
 
    // Age

    const [ totalAge , Ave]  = averageAge(allParks);
    console.log(`Total Age of all parks is ${totalAge} and average age is ${Ave}`) ;

   


    

    // Park having more than 1000 tress .

}

function streetsReport (allStreets)
{

}

// Calling the functions
parksReport(allParks) ;
streetsReport(allStreets);


// Function to calculate the average age of the park.

function averageAge(allParks)
{
    let age  = (p1.calcage() + p2.calcage() + p3.calcage()) ;
    let averageAge = age / allParks.length ;
    return [ age , averageAge ];

}


