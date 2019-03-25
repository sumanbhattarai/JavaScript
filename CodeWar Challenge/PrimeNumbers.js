
// Check Prime Number


function checkPrime(num)
{
    if(num==1)
    {
        return "Neither Prime nor Composite. " ;
    }
    else if (num==2)
    {
        return "It is prime Number ." ;
    }
    else
    {
        for ( var i =  2  ; i < num ; i++ )
        {
            if( num % i  === 0 )
            {
                return "It is Composite Number." ;
            }
        }

        return "It is Prime Number." ;
    }

}

console.log(checkPrime(59)) ;