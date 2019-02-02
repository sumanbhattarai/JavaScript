





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


const brushTeeth = function(message){
return new Promise((resolve , reject)=>{
    resolve(`${message} and I brushed my teeth.`) ;
});
}

const wentCollege = function(message){
return  new Promise((resolve,reject)=>{
    resolve(`${message} and I went to the College.`) ;

});
}

getUp.then((message)=>{
return brushTeeth(message);
}).then((message)=>{
return wentCollege(message); 
}).then((message)=>{
console.log(message) ;
}) ;




