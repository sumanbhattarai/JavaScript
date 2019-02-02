





// Call Back hell 

function task()
{
    function getUp()
    {
        console.log('I got Up') ;
        function brushTeeth()
        {
            console.log('I bursh my teeth') ;
            function wentCollege()
            {
                console.log('I went to College') ;
            }
            wentCollege();
        }
        brushTeeth();
    }
    getUp() ;
}

task();




