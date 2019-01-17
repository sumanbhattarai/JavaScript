/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/



// Declaring Global varibales .


var roundScore , activePlayer , scores , gamePlay ;

function initial()
{
    // Data 
    scores = [0 ,0] ;
    activePlayer = 0 ; 
    roundScore = 0 ;
    gamePlay = true ;

    // UI
    document.querySelector('#score-0').textContent = 0 ;
    document.querySelector('#current-0').textContent = 0 ;
    document.querySelector('#score-1').textContent = 0 ;
    document.querySelector('#current-0').textContent = 0 ;

    // Players Name 
    document.querySelector('#name-0').textContent = "Player 1" ;
    document.querySelector('#name-1').textContent = "Player 2" ;

    // No Winner 
    document.querySelector('.player-0-panel').classList.remove('winner') ;
    document.querySelector('.player-1-panel').classList.remove('winner') ;
    document.querySelector('.player-0-panel').classList.remove('active') ;
    document.querySelector('.player-0-panel').classList.add('active') ;
    document.querySelector('.player-1-panel').classList.remove('active') ;
    
    






    // Hiding the dice before starting game .

    document.querySelector('.dice').style.display = "none" ;


}

initial();

// Declaring Functions for Next player 

function NextPlayer()
{
    document.querySelector('.dice').style.display = "none" ;
        
        if(activePlayer === 0 )
        {
            activePlayer = 1 ;
        } 
        else
        {
            activePlayer = 0 ;
        }

        roundScore = 0 ;
        document.getElementById('current-0').textContent = "0" ;
        document.getElementById('current-1').textContent = "0" ;

        document.querySelector('.player-0-panel').classList.toggle('active') ;
        document.querySelector('.player-1-panel').classList.toggle('active') ;

}

// On clicking the roll dice button 

document.querySelector('.btn-roll').addEventListener('click' , function(){
    if(gamePlay)
    {
          // Dice Roll 

    var dice =  Math.floor(Math.random() * 6) + 1 ;
    

    // Dice Interface
    document.querySelector('.dice').style.display = "block" ;
    document.querySelector('.dice').src = 'dice-' + dice + '.png' ;

    // Testing if 1 . 

    if(dice !== 1)
    {
        // continue
        roundScore += dice ;
        document.getElementById('current-' + activePlayer).textContent = roundScore ;


    } else {
        // Next player turn and current score 0 .
        NextPlayer();
    }

    


    }

  


}) ;


// On Hold

document.querySelector('.btn-hold').addEventListener('click' , function(){

    if(gamePlay)
    {
        document.querySelector('.dice').style.display = "none" ;


    //Add score to the global

    scores[activePlayer] += roundScore ;
    console.log(scores[roundScore]);

    // Ui update 

    document.querySelector('#score-'+ activePlayer).textContent = scores[activePlayer] ;

    // Check Winner (

        if(scores[activePlayer] >= 30)
        {
            document.querySelector('#name-' + activePlayer).textContent = "Winner ! " ;
            document.querySelector('.dice').style.display = "none" ;
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active') ;
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner') ;
            gamePlay = false ;





        } else {
             // Next Player Turn
    NextPlayer();

        }

    }
});


// New Game

document.querySelector('.btn-new').addEventListener('click' , initial) ;