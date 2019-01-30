
        //function declaration
       // function info(job , name){}

        //function expression.
     var info =   function(job , name) 
     {
         switch(job)
         {
             case 'Teacher' :
             return name + ' teaches.' ;
             // No break since here is return.


             case 'Designer' : 
             return name + ' designs.' ;


             case 'Software Engineer' :
             return name + ' develops Software.' ;

         }


     }

     console.log(info('Software Engineer' , 'Suman'));

        
