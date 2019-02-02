





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


// Call back hell to promises

const getUp = new Promise((resolve , reject) =>{
    resolve('I got Up') ;
});


const brushTeeth = function(){
return new Promise((resolve , reject)=>{
    resolve('I brushed my teeth') ;
});
}

const wentCollege = function(){
return  new Promise((resolve,reject)=>{
    resolve('I went to College') ;

});
}

getUp.then((message)=>{
console.log(message);
return brushTeeth();
}).then((message1)=>{
console.log(message1) ;
return wentCollege(); 
}).then((message2)=>{
console.log(message2) ;
}) ;




