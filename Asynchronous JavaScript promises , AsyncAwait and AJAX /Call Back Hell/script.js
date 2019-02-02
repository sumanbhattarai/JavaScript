

// Callback Hell is  also known as Pyramid of Doom .
// It consists of multiple nested callbacks which makes code hard to read and debug.
// In order to solve this mess of call back hell , promises were introduces in ES6.

function callBackHell()
{
    setTimeout(()=>{
        console.log('My') ;
        setTimeout(()=>{
            console.log('name') ;
            setTimeout(()=>{
                console.log('is') ;
                setTimeout(()=>{
                    console.log('Suman') ;
                    setTimeout(()=>{
                        console.log('Bhattarai.') ;
                        
                    } , 1000) ;
                    
                } , 3000) ;
                
            } , 1000) ;
            
        } , 1500) ;
        
    } , 1000) ;

}

callBackHell() ;