
// Lets Create a simple module

var BudgetModule = (function(){

    // Code


})();

// Lets create another module complete independent of BudgetModule .

var UIModule = (function(){

    var DOMStrings = { // It is done so that if we change the name of group in index.html file then we can just change the name here. 
        type : '.add__type' ,
        description : '.add__description' ,
        value : '.add__value' ,
        button :  '.add__btn'
    } ;

    return {
        input : function() 
        {
            return {
                type : document.querySelector(DOMStrings.type).value ,
                description : document.querySelector(DOMStrings.description).value ,
                value : document.querySelector(DOMStrings.value).value 
                

            };
        },

        getDOMStrings : function()
        {
            return DOMStrings ;
        }

        
    };
    

}());

// We can see that this two module are complete independent with each other so lets create a third module than can use these two modules.

var LinkModule = (function(bm , um){

    var strings = um.getDOMStrings() ;

    // Following DRY principle.
    var task = function()
    {
        // List of task to do when the button is clicked.

        // 1. Get the input values 

        console.log(um.input()) ;

        // 2. Add the item to the Budgte Module.

        // 3. Add the item to the UI Module .

        // 4. Calculate the result.

        // 5. Update th UI .

         
    }

    document.querySelector(strings.button).addEventListener('click' , task );

    // This should work not only when the button is clicked but also when the user press the return key. So , lets create a new event listener for this.
    // Since , this event donot specify any selection of ids and groups , we are making it global.

    document.addEventListener('keypress' , function(event){ // We can put anyname instead of event.
        
        // From the console we came to know that keypress is actually an object.
        // keypress.keycode is where the code of the key is stored.
        // Use https://keycode.info/ to get the keycode .
        // Key code for return key is 13 .
        // Some old browers may only have which property so lets us both to be aware.

        if(event.keyCode === 13 || event.which  === 13 )
        {
            task();
            
        }


    }) ;

}( BudgetModule , UIModule )) ;