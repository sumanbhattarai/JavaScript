

// Maps are better than object because we can use other primitive data types like number , boolean etc as keys which is not possible in objects.

// It is possible to do looping in maps.

// It is possible to return the size of the map.

// It is possible to remove the elements in the map.

// Lets create a simple map .

const quiz = new Map() ; // Map created .

// Lets add some properties .

quiz.set('question' , 'What is the captial city of Nepal ? ') ;
quiz.set(1 , 'Pokhara') ;
quiz.set(2 , 'Kathamndu') ;
quiz.set(3 , 'Bharatpur') ;
quiz.set(4 , 'Lalitpur') ;
quiz.set('correctAnswer' , 2) ;
quiz.set(true , 'Correct Answer !') ;
quiz.set(false , 'Wrong Answer') ;

// console.log(quiz);

// console.log(quiz.size); // It returns 8 since the length of quiz map is 8 .

// quiz.delete(true); // It deletes the property having key true .

// Displaying the question in the console.
console.log(quiz.get('question'));


// forEach looping in map

quiz.forEach((value , key) =>{ 
    if(typeof(key) === 'number')
    {
    console.log(`Answer ${key} : ${value}`);
    }
}) ;

// parseInt converts the input value int into number.
const input = parseInt(prompt('Enter the correct answer :'));

// quiz.get('correctAnswer') retursn 2 .
// if input === 2  , it returns true .
// Now quiz.get(true) returns Correct Answer.
console.log(quiz.get(input === quiz.get('correctAnswer')));