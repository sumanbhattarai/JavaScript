

    // Passing Function as Arguments.
    // Examples of callback functions.
    // Lets make a machine that takes age array and returns 18+ if age is above 18 and "Child" for below 18.
    // Output should also be in array.


    var ages = [ 19 , 30 , 18 , 29 , 11 ,26 , 9] ;

    function checkAge ( el )
    {
        if(el>=18)
        {
            return "18+" ;
        }
        else if(el<18)
        {
            return "Child" ;
        }
    }

    function check( arr , fn) 
    {
        var output  = [] ;
        for(var i = 0 ; i < arr.length ; i++)
        {
            output.push(fn(arr[i])) ; // It will push the result at the last of array.
        }
        return output ;
    }

    var result = check( ages , checkAge ) ;
    console.log(result) ;
    
    
    
