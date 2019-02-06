

/*
In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.


*/

function alphabetPosition(text) {
    var textArr = text.split("");
    var result = "";
    for( let i=0 ; i < textArr.length ; i++ )
    {
        if((parseInt(textArr[i] , 36 ) - 9) >= 1 && (parseInt(textArr[i] , 36 ) - 9) <=26 )
        {
            value = parseInt(textArr[i] , 36 ) - 9 ;
            result+=`${value} ` ;
        }
    }
    result = result.substring(0, result.length - 1); // To remove the space at the last of the string .
    return result ;
  }

  console.log(alphabetPosition("The sunset sets at twelve o' clock."));