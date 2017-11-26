var wds = ['xxddxxddxx','PANDA', 'DONKEY', 'CRAZY', 'ENORMOUS', 'DINOSAUR', 'PYSCHOTHERAPY', 'EXTRATERRESTRIAL', 'JUPITER', 'RELATIVITY'];
var currentWord = '';
var guessTotal = 22;
var correctGuess = '';
var correctGuesses = [];
var letterGuessed = ''; 
var pressedkey ;
var hidden = [];
var gameStatus = false;
var wins = 0;
var losses = 0;

var ran ;

function start(){
    //generate the random word and send that word to the makeBlanks to make the palletes 
    ran = Math.floor(Math.random() * wds.length);
    currentWord = wds[ran];
    makeBlanks(currentWord);
    //loops through the hidden array and appends the "_" in each index
    for(var i =0; i<currentWord.length; i++ ){
        $(".word").append(hidden[i]);
    }
    $(".guessRem").html(guessTotal);
    $(".lGuessed").html(letterGuessed);
    $(".wins").html(wins);
    $(".losses").html(losses);
}
function makeBlanks(word){
//replaces "_" for the letters of the chosen word in hidden array
    for(var i=0; i<word.length; i++){
        hidden[i] = '_';
    }
 
}
function uncover(word, letter){
   //loops through word and if the letter matches with word index, then it replaces the "_" with letter 
    for(var i=0; i<word.length; i++){
        console.log('i am starting');
        
        if(letter === word[i]){
            console.log("changing");
            hidden[i] = letter;
        }
    }
     $(".word").empty();
     $(".word").html(hidden);
    //check and see if all the letters have been correctly guessed, and if it has, end the game
    if(hidden.indexOf('_') != -1){
        console.log('index of _ : ',hidden.indexOf('_'));
    }else{
        alert('You won!');
        wins++;
        end();
    }
}
function checkLetter(letter, word){
    var lCase = word.toLowerCase();
  //checks to see if the letter was correctly guessed
    for(var i=0; i<lCase.length; i++){
        if(letter == lCase[i]){
            correctGuess = letter;
            correctGuesses.push(correctGuess);
            uncover(lCase, correctGuess);
        }
    } 
}
function indexToChar(i) {
    return String.fromCharCode(i);
}
function end(){
    gameStatus = false;
    guessTotal = 22;
    letterGuessed= '';
    gameStatus = false; 
    correctGuesses = [];
    hidden = [];

    $(".word").empty();
    $(".guessRem").empty();
    $(".lGuessed").empty();
    alert("Press any key to start another game!");
}

$(document).ready(function(){    
    alert('Press any key to begin the game!');
    $(this).on("keypress", function(e){
        //start the game on keypress
        if(gameStatus == false){
            gameStatus = true;
            start();
        }else if(e.which < 97 || e.which > 122){
            return false;
        }else{
            letterGuessed = indexToChar(e.which);
            $(".lGuessed").html(letterGuessed);
            //check and see if the guessed letter is right
            checkLetter(letterGuessed, currentWord);
            guessTotal--;
            $(".guessRem").html(guessTotal);
            if(guessTotal == 0){
                losses++;
                alert('You lost!');
                 end();
            }  
        }//end of else-statement
    })//end of keypress
})
