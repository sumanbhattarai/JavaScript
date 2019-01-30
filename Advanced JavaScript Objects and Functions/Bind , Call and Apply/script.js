

        // function.apply(thisArg, [argsArray])

        // Borrowing method using call

        var person = {
            
            
            calculateAge : function(fullName ,age)
            {
                if(age >=18)
                {
                    console.log(fullName + ' , you are adult.') ;
                }
                else
                {
                    console.log(fullName + ' , you are still a child.');
                }
            }
        };

        person.calculateAge('Suman Bhattarai' , 19);

        

        var sujan = {
            
        };

        //Borrowing method using call 

        person.calculateAge.call(sujan ,'Sujan Bhattarai', 20);

        // Using bind
        // bind allows us to create a copy of a function 

        var Saroj = person.calculateAge.bind(person ) ;
        Saroj('Saroj Neupane' , 17) ;

        var Sandesh = person.calculateAge.bind(person , 'Sandesh Shrestha' , 20) ;
        Sandesh();
       
    
    
    
    
    
 