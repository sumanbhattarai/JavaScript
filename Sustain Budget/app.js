
// Lets Create a simple module

var SustainBudget = (function(){

    var x = 5 ; // It is private and is inaccessible from outer world.

    var sum = function(a) // It is also private .
    {
        return x + a ;
    }

    // In order to access this , lets return an object .
    return {
         
            show : function(a)
            {
                console.log(sum(a)) ;
            }
    }


})();