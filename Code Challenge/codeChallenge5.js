

(function(){

var Question = function( question , answer , correctAnswer)
{
this.question = question ;
this.answer = answer ; 
this.correctAnswer = correctAnswer ;
}


// Prototype
var score = 0 ;

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
    score ++ ;
    console.log('Your Score is : ' + score ) ;
}
else
{
    console.log('Incorrect Answer')
    console.log('Your Score is : ' + score ) ;

}

}

var q1 = new Question ( 'What is the captial city of Nepal ?' , ['New Delhi' , 'Kathmandu' , 'Beijing'] , 2) ;
var q2 = new Question ( 'Where was Lord Buddha born ?' , ['Nepal' , 'India' , 'Thailand'] , 1) ;
var q3 = new Question ( 'Who is the prime minister of Nepal ? ' , ['Puspa Kamal Dahal \'Pachanda\' ' , 'Sher Bahadur Deuwa' , 'KP Sharma Oli'] , 3) ;


var quesArray  = [ q1 , q2 , q3 ] ;

function NextQuestion(){
var choice = Math.floor(Math.random()* quesArray.length)  ; // It will generate random number between 0 and 2.

quesArray[choice].displayQuestion();

// Taking input from the user using prompt.

var input = (prompt('Enter you answer : ')) ;


if(input !== 'Exit' && input !== 'exit' )
{
quesArray[choice].checkAnswer(parseInt(input));  // parseInt converts String to Number since the value from the prompt is always string.
NextQuestion();
}
else 
{
    console.log('Game Ended . Have a good Day ')
}


}
NextQuestion();

}());

