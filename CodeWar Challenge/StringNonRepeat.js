

/* 
Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.


*/


function firstNonRepeatingLetter(s) {

    // Add your code here
    var answer ;
    const stringArr = s.toUpperCase().split("") ;
    for( let i = 0 ; i < stringArr.length ; i++ )
    {
        for(let j = i+1  ; j < stringArr.length ; j++ )
        {
            if( stringArr[i]!==stringArr[j])
            {
                answer = stringArr[i] ;
                continue ;
            }
            else
            {
                answer = "" ;
                break ;
            }
        }

        if(answer !== "")
        {
            return answer ;
        }

    }
    


  }


console.log(firstNonRepeatingLetter("mYnameisSUmanBhattaraimyNaMes")) ; // d