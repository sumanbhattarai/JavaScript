

        // Functions returning functions

        function ageReview(age)
        {
            if(age<18)
            {
                return function(name) // It is an anonymous function because it doesnot have name.
                {
                    console.log(name + ',' + ' you are still a child.') ;
                }
            }

            else if (age===18)
            {
                return function(name) // It is an anonymous function because it doesnot have name.
                {
                    console.log(name + ',' + ' you are now 18.') ;
                }

            }
            else 
            {
                return function(name) // It is an anonymous function because it doesnot have name.
                {
                    console.log(name + ',' + ' you are now Adult.') ;
                }

            }
        }

        var SB = ageReview(19) ;
        SB('Suman') ;
       
        // Another way of invoking this function.

        ageReview(15)('Pramish');
        
        
        
