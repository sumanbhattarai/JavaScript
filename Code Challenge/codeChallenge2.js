
    

    /*

    John and Mike both play basketball in diff teams. In the latest 3 games , 
    John's team scored 89 , 120 and 103 points, while Mikes's team 
    scored 116 , 94, and 123 points.

    1. Calculate the average score for each team.
    2. Decide which teams wins in average, and print the winner to the console. 
    Also include the average score in the output. Don't forget to 
    take into account there might be a draw.
    
    
    
    
    */
     var john1 , john2 , john3 ;
     john1 = 89 ;
     john2 = 120 ;
     john3 = 103 ;
     var mike1 , mike2 , mike3 ;
     mike1 = 116 ;
     mike2 = 94 ;
     mike3 = 123 ;

     var averageJohn , averageMike ;
     averageJohn = (john1 + john2 + john3)/3 ;
     averageMike = (mike1 + mike2 + mike3)/3 ;

     if(averageJohn!=averageMike)
     {
        if(averageJohn>averageMike)
        {
     
         var winnerName = 'John';
         var winnerAverage = averageJohn ;
        }
        else
        {
         var winnerName = 'Mike';
         var winnerAverage = averageMike ;

        }

        console.log('Winner is : '+ winnerName) ;
        console.log('Winner\'s average score is : ' + winnerAverage);
     

     }
     else
     {
         console.log('Game is draw');

     }

     
     