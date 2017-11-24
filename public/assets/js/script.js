var wds = ['PANDA', 'DONKEY', 'CRAZY', 'ENORMOUS', 'DINOSAUR', 'PYSCHOTHERAPY', 'EXTRATERRESTRIAL', 'JUPITER', 'RELATIVITY'];
var currentWord = '';
var guessTotal = 15;
var guesses = [];
var letterGuessed= ''; 
var result = '';
var gameStatus = false;
var wins = 0;
var losses = 0;

var ran = Math.floor(Math.random() * wds.length);

function start(){

    currentWord = wds[ran];

    $(".word").append(wordBlanks(currentWord));

    $(".guessRem").append(guessTotal);

    $(".lGuessed").html(letterGuessed);

    $(".wins").html(wins);

    $(".losses").html(losses);
}




function wordBlanks(word){
    var result = '';

    for(var i=0; i<word.length; i++){
        result += '_';
    }
    return result;
}
//need to pass in the word and the guessed letter + we will need to concatenate the guessed letters to the "_'s"


function blanksToLetters(word, letter){
    // var index = word.indexOf(letter);
    
    // console.log('Index: ', index);
    // console.log(index);
    for(var i=0; i<word.length; i++){
        if(letter == word[i]){
            result += letter;
        }else{
            result += '_';
        }
    }
    console.log('result',result);


    //need to create an array that stores all the correctly guessed leters
    //and loop through them and see if they match any letters in the word
    //going to need to use a nested loop
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

        }
    }
    
}
function end(){
    guessTotal = 15;
    var letterGuessed= '';
    gameStatus = false; 

    $(".word").empty();
    
    $(".guessRem").empty();
    
    $(".lGuessed").empty();
}

$(document).ready(function(){
    console.log(wds[ran]);

    console.log(wordBlanks(wds[ran]));

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
                console.log('you ran out of guess. game over!');
                end();
            }
        }
       
    })

})
