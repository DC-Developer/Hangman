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

var ran = Math.floor(Math.random() * wds.length);

function start(){
    console.log("start function");
    currentWord = wds[ran];
    makeBlanks(currentWord);

    for(var i =0; i<currentWord.length; i++ ){
        $(".word").append(hidden[i]);
    }

    $(".guessRem").append(guessTotal);

    $(".lGuessed").html(letterGuessed);

    $(".wins").html(wins);

    $(".losses").html(losses);
}
function makeBlanks(word){

    for(var i=0; i<word.length; i++){
        hidden[i] = '_';
    }
    console.log('hidden: ',hidden);   
}
function uncover(word, letter){
    
    for(var i=0; i<word.length; i++){
        console.log('i am starting');
        
        if(letter === word[i]){
            console.log("changing");
            hidden[i] = letter;
        }
    }
    console.log('revealed: ', hidden);  
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
function indexToChar(i) {
    return String.fromCharCode(i);
}
function checkLetter(letter, word){
    var lCase = word.toLowerCase();
    console.log("lowercased: ",lCase);

    for(var i=0; i<lCase.length; i++){
        if(letter == lCase[i]){
            console.log('You guessed the correct letter');
            correctGuess = letter;
            console.log('correctguess: ', correctGuess);
            correctGuesses.push(correctGuess);
            console.log('correctguesses array: ', correctGuesses);
            uncover(lCase, correctGuess);
            
        }
    } 
}
function end(){
    guessTotal = 15;
    letterGuessed= '';
    gameStatus = false; 
    correctGuesses = [];

    $(".word").empty();
    
    $(".guessRem").empty();
    
    $(".lGuessed").empty();
}

$(document).ready(function(){
    console.log(wds[ran]);
    

    $(this).on("keypress", function(e){
        //start the game on keypress
        if(gameStatus == false){
            console.log('You started the game');
            start();
            gameStatus = true;
        }else if(e.which < 97 || e.which > 122){
            return false;
        }else{
            console.log(e.which);
            console.log(indexToChar(e.which));
            letterGuessed = indexToChar(e.which);
            $(".lGuessed").html(letterGuessed);
            console.log('letterguessed: ', letterGuessed);
            //check and see if the guessed letter is right
            checkLetter(letterGuessed, currentWord);
            guessTotal--;
            console.log('guesstotal: ', guessTotal);
            if(guessTotal == 0){
                losses++;
                console.log('you ran out of guesses. game over!');
                 end();
            }  
        }//end of else-statement
    })//end of keypress
})
