

// ES6


const second = () =>{
    console.log('Second') ;
}

const third = () =>{
    console.log('third') ;
}

const imlate = () =>{

    // Simple Asycn JS code
    // Sytanx of setTimeout() is setTimeout( fn , milliseconds )
    setTimeout(() => console.log('I will appear after 3 seconds.') , 3000) ;
    
}

const first = () => {
    console.log('First') ;
    second() ;
    imlate() ;
    third() ;

} ;

first();



