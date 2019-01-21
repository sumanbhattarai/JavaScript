
// Lets Create a simple module

var BudgetModule = (function(){

    var x = 5 ; // It is private and is inaccessible from outer world.

    var sum = function(a) // It is also private .
    {
        return x + a ;
    }

    // In order to access this , lets return an object .
    return {
         
            show : function(a)
            {
                return sum(a) ;
            }
    }


})();

// Lets create another module complete independent of BudgetModule .

var UIModule = (function(){
    
    //Code


}());

// We can see that this two module are complete independent with each other so lets create a third module than cae use these two modules.

var LinkModule = (function(bm , um){

    var output  =  bm.show(23) ;
    console.log(output);


}( BudgetModule , UIModule )) ;