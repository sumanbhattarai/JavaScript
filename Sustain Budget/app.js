
// Lets Create a simple module

var BudgetModule = (function(){

    // Code


})();

// Lets create another module complete independent of BudgetModule .

var UIModule = (function(){
    
    //Code


}());

// We can see that this two module are complete independent with each other so lets create a third module than can use these two modules.

var LinkModule = (function(bm , um){

    // Code

}( BudgetModule , UIModule )) ;