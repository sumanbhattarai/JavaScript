
        var firstName = 'Suman' ;
        var age = 19 ;

        //Ternary Operatios
        age >=18 ? console.log('is 18+'): console.log('is not 18+');

        var drink = age>=18 ? 'beer' : 'juice' ;
        console.log(firstName + ' drinks ' + drink) ;

        //Switch Statements

        var job = 'Software Engineer' ;

        //If there are more no. of else if then it is better to use switch statements.
        switch(job)
        {
            case 'teacher' : 
            console.log(firstname + ' teaches.' ) ;
            break;

            case 'Driver' : 
            console.log(firstname + ' drives.') ;
            break;

            //multiple cases
            case 'Software Engineer' : 
            case 'IT Engineer': 
            case 'Computer Engineer':
            console.log(firstName + ' develops software.') ;
            break;

            default:
            console.log(firstName + ' does none.');
        }

        //It will prints all the true statements.
        switch(true)
        {
            case age<18 :
            console.log('You are child.');
            break ;

            case age==19 : //it is true . 
            console.log('You are 19 yrs old.');

            case age>17 : //it is true.
            console.log('You are adult');
            break ;
        }

