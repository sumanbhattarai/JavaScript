

    /*

(function(){
    var Question = function( choice)
{
    if (choice===1)
    {
        console.log("What is the captial city of Nepal ? ") ;
        console.log('1: New Delhi') ;
        console.log('2: Kathmandu') ;
        console.log('3: Beijing') ;
        var correctAns = 2 ;
        return correctAns ;
    }

    else if (choice===2)
    {
        console.log('Where was Lord Buddha born ?') ;
        console.log('1: Nepal') ;
        console.log('2: India') ;
        console.log('3: Thailand') ;
        var correctAns = 1 ;
        return correctAns ;


    }

    else
    {
        console.log('Who is the prime minister of Nepal ? ') ;
        console.log('1: Puspa Kamal Dahal \'Prachanda\' ') ;
        console.log('2: Sher Bahadur Deuwa') ;
        console.log('3: KP Sharma Oli') ;
        var correctAns = 3 ;
        return correctAns
    }

}



var choice = Math.floor(Math.random()*3) + 1 ;
var result = Question(choice);

var answer = window.prompt('Enter your Answer : ') ;

if(Number(answer) === result)
{
    console.log('Correct Answer') ;
} 
else
{
    console.log('Incorrect Answer');
}

}());


*/ 


// Lets do the same thing differently using function constructor.

// In order to make this code as a plugin , so that other people can use these in their code than we have to use IIFE .

(function(){

    var Question = function( question , answer , correctAnswer)
{
    this.question = question ;
    this.answer = answer ; 
    this.correctAnswer = correctAnswer ;
}


// Prototype

Question.prototype.displayQuestion = function()
{
    console.log(this.question) ;
    for ( var i = 0 ; i < this.answer.length ; i++ )
    {
        console.log( (i+1) + ' : ' + this.answer[i]) ;
    }
}

Question.prototype.checkAnswer = function ( input)
{
    if(input === this.correctAnswer)
    {
        console.log('Correct Answer') ;
    }
    else
    {
        console.log('Incorrect Answer')
    }

}

var q1 = new Question ( 'What is the captial city of Nepal ?' , ['New Delhi' , 'Kathmandu' , 'Beijing'] , 2) ;
var q2 = new Question ( 'Where was Lord Buddha born ?' , ['Nepal' , 'India' , 'Thailand'] , 1) ;
var q3 = new Question ( 'Who is the prime minister of Nepal ? ' , ['Puspa Kamal Dahal \'Pachanda\' ' , 'Sher Bahadur Deuwa' , 'KP Sharma Oli'] , 3) ;


var quesArray  = [ q1 , q2 , q3 ] ;
var choice = Math.floor(Math.random()* quesArray.length)  ; // It will generate random number between 0 and 2.

quesArray[choice].displayQuestion();

// Taking input from the user using prompt.

var input = parseInt(prompt('Enter you answer : ')) ; // parseInt converts String to Number since the value from the prompt is always string.

quesArray[choice].checkAnswer(input);

}());



