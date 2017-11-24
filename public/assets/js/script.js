var wds = ['xxddxxddxx','PANDA', 'DONKEY', 'CRAZY', 'ENORMOUS', 'DINOSAUR', 'PYSCHOTHERAPY', 'EXTRATERRESTRIAL', 'JUPITER', 'RELATIVITY'];
var currentWord = '';
var guessTotal = 22;
var correctGuess = '';
var letterGuessed = []; 
var hidden = [];
var repeat = false; 
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
    // $(".word").append(wordBlanks(currentWord));
    // $(".word").append(blanksToLetters(currentWord));

    $(".guessRem").append(guessTotal);

    $(".lGuessed").html(letterGuessed);

    $(".wins").html(wins);

    $(".losses").html(losses);
}

//need to pass in the word and the guessed letter + we will need to concatenate the guessed letters to the "_'s"


function makeBlanks(word){
    // var index = word.indexOf(letter);
    
    // console.log('Index: ', index);
    // console.log(index);

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
    
    // for(var i=0; i<word.length; i++){
    //     $(".show").html(word[i]);
    // }
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
            uncover(lCase, correctGuess);
            
        }
    }
    
}
function checkRep(keypress){
    for(var i=0; i<letterGuessed.length; i++){
        if(keypress == letterGuessed[i]){
            // repeat = true;
            // console.log('repeat: ', repeat);
            return true;
        }else{
            return false;
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
            
            // checkRep(indexToChar(e.which));
            
            if(checkRep(indexToChar(e.which)) === false ){
                letterGuessed += indexToChar(e.which);
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
            }else{
                alert('Enter a new letter!');
            }
               
            

       
        }
       
    })

})
