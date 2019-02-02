

// Let us create a promise to do homework .
// resolve is for if the promise is completed.
// reject is for if the promise is not fullfilled for some reasons.

const doneHomework = new Promise ( (resolve , reject ) => {

    const status = false ;
    if(status)
    {
        resolve('HomeWork Done') ;
    }
    else 
    {
        reject('Homeword is not finished yet.') ;
    }
});

doneHomework.then((message)=>{
    console.log(message) ;
}).catch((message)=>{
    console.log(message);
});