

/* 
Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.


*/


// function firstNonRepeatingLetter(s) {

//     // Add your code here
//     var answer ;
//     const stringArr = s.split("") ;
//     if(stringArr.length === 1)
//     {
//         return s ;
//     }
//     for( let i = 0 ; i < stringArr.length ; i++ )
//     {
//         for(let j = i+1  ; j < stringArr.length ; j++ )
//         {
//             if( stringArr[i].toUpperCase() !== stringArr[j].toUpperCase() )
//             {
//                 answer = stringArr[i] ;
//                 //console.log(answer);
//                 continue ;
//             }
//             else
//             {
//                 answer = "" ;
//                 break ;
//             }
//         }

//         if(answer !== "")
//         {
//             return answer ;
//         }
//         else 
//         {
//             continue ;
//         }

//     }
    
//   }


// console.log(firstNonRepeatingLetter("moonmen")) ; // d



function firstNonRepeatedCharacter(string) {
    for (var i = 0; i < string.length; i++) {
      var c = string.charAt(i);
      if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
        return c;
      }
    }
    return null;
  }


console.log(firstNonRepeatedCharacter("moonmen"));