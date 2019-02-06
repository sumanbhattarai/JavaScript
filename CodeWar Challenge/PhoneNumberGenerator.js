

/*


Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.



*/

function createPhoneNumber(numbers){
    var first = "" ;
    var second = "" ;
    var third = "" ;


    for(let i = 0 ; i < numbers.length ; i++)
    {
        if(i<3)
        {
            first = first + numbers[i] ;
        }
        else if(i < 6)
        {
            second  = second + numbers[i];
        }
        else 
        {
            third = third + numbers[i] ;
        }

    }

    var phoneNumber =  `(${first}) ${second}-${third}` ;
    return phoneNumber ;
    
  
}

console.log(createPhoneNumber([9,8,4,5,6,9,6,2,1,1]));
