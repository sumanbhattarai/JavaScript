
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

    document.querySelector('.add__btn').addEventListener('click' , function(){

        // List of task to do when the button is clicked.

        // 1. Get the input values 

        // 2. Add the item to the Budgte Module.

        // 3. Add the item to the UI Module .

        // 4. Calculate the result.

        // 5. Update th UI .

    });

    // This should work not only when the button is clicked but also when the user press the return key. So , lets create a new event listener for this.
    // Since , this event donot specify any selection of ids and groups , we are making it global.

    document.addEventListener('keypress' , function(event){ // We can puy anyname instead of event.
        console.log(event);


    }) ;

}( BudgetModule , UIModule )) ;