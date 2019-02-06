
/*

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.


Examples :

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

**/


function XO(str) {
    const data = str.toUpperCase() ;
    const dataArr = data.split("");
    var countO = 0 ;
    var countX = 0 ;

    dataArr.forEach(el => {
        if(el === "X")
        {
            countX++ ;
        }
        else if(el==="O")
        {
            countO++ ;
        }
        
    });

    if(countX !== countO){
        return false;
    }
    else {
        return true ;
    }
   
}

console.log(XO('oxOxX'));

// Alternate Best way 

function XO1(str) {
    var sum = 0;
    for(var i=0; i<str.length; i++){
      if(str[i].toLowerCase() == 'x') sum++;
      if(str[i].toLowerCase() == 'o') sum--;
    }
    return sum == 0;
  }

  console.log(XO1('OOooXxXx'));
