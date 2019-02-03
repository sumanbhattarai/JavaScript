
        // Closure
        // A closure is an inner function that has access to the outer (enclosing) function’s variables—scope chain.
        // An inner function has always access to the variables and parameters its outer function , even after the outer function has returned.

        function checkAge(name)
        {
            var dob = 1999 ;
            return function() //  This inner function can access dob variable and name paramater as well.
            {
                var age = 2018 - dob ;
                console.log(name + ', ' + ' you are ' + age + ' years old.') ;
            }
        }

        checkAge('Suman')();  // Output : Suman, you are 19 years old.





   