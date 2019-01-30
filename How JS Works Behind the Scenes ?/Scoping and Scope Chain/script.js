

    var myName = 'Suman' ;
    
    info();


    //Lexical Scope
    function info()
    {
        var myAge = 19 ;
        infoDemo();
        function infoDemo()
        {
            var myAddress = 'PKR' ;
          
            console.log("My name is : " + myName) ; // It can access myName because it has global scope.
            console.log("My address is : " + myAddress) ; 
            console.log("My age is : " + myAge) ; // It can access myAge because this varibale is in info() function and this function is also inside the same info() function.
        }

    }



