

//For loop

for (var i = 1 ; i<=10 ; i++)
{
    console.log(i) ;
}


var names = new Array ('Suman' , 'Sujan' , 'Abiral' , 'Sandesh') ;
//Donot use name in varibale name . It may throw an error.

for (var j = 0 ; j< names.length ; j++)
{
    console.log(names[j]);
}

var k = 0;
while(k< names.length)
{
    console.log(names[k]) ;
    k++ ;
}


// Separate String and number from array using loop.

var info = new Array('Suman' , 1999 , 'SB' , 'PKR' , 19)
for ( var count = 0 ; count < info.length ; count++)
{
    if(typeof info[count] == "string")
    {
        console.log('Strings are : ') ;
        console.log(info[count]) ;
    }
    else
    {
        console.log('Numbers are : ' ) ;
        console.log(info[count]);
    }
}



//Break and Continue

for ( var x= 0 ; x< info.length ; x++)
{
    if(typeof info[x]!== 'string') continue ;
    console.log(info[x]);
}

for ( var y =0 ; y< info.length ; y++)
{
    if(typeof info[y]!== 'string') break ;
    console.log(info[y]);
}

//Reverse order in for loop
for ( var z = info.length-1 ; z >= 0 ; z--)
{
    console.log(info[z]);
}

