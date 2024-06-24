const answer = Math.floor(Math.random() * 10) + 1;
let guesses=0;

document.getElementById('submitButton').onclick=function(){
    let guess = document.getElementById('guessField').value;
    guesses++;
    if( isNaN(guess)){
        alert("Sorry, please use a number.");
    
    }
    else if(guess =="" || guess == 0 ){
        alert('Please enter a number between 1-10!');
     
    }

    if(guess==answer){
        alert("Correct! You guessed the number in "+guesses+" guesses.");
    }
    else if(guess<answer){
        alert("Too low! Try again.");
    }
    else{
      alert("Too high! Try again.");
    }
   
    document.getElementById('guessField').value = "";
}       