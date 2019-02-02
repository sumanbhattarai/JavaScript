

// It is a special syntax to work with promises in a more comfortable fashion.
// It's surprisingly easy to understand and use.
// The async function declaration defines an asynchronous function, which returns an AsyncFunction object.
// It was introduced in ES8 .


// Producing the promises .

const getUp = new Promise((resolve , reject) =>{
    resolve('I got Up') ;
});


const brushTeeth = function(message){
return new Promise((resolve , reject)=>{
    resolve(`${message} and I brushed my teeth`) ;
});
}

const wentCollege = function(message){
return  new Promise((resolve,reject)=>{
    resolve(`${message} and I went to the College.`) ;

});
}

// Different way of consuming the promises .
// It is called Async Await .

async function task()
{
     const getUpmessage = await getUp ;
     const brushTeethMessage = await brushTeeth(getUpmessage) ;
     const result = await wentCollege(brushTeethMessage);
     console.log(result);  

     const status  = ' This is a way to return something from a asycn function . ' ;
     return status ;

}

task().then((output)=>{
    console.log(output) ;

}).catch(()=>{
    console.log('Error Occured.');
});