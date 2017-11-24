var wds = ['PANDA', 'DONKEY', 'CRAZY', 'ENORMOUS', 'DINOSAUR', 'PYSCHOTHERAPY', 'EXTRATERRESTRIAL', 'JUPITER', 'RELATIVITY'];
var guessTotal = 15;
var guesses = [];
var wordGuessed= ''; 
var result = '';

var ran = Math.floor(Math.random() * wds.length);

function wordBlanks(word){
    var result = '';

    for(var i=0; i<word.length; i++){
        result += '_';
    }
    return result;
}
//find the index position of the guessed letter
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

}


$(document).ready(function(){
    console.log(wds[ran]);

    console.log(wordBlanks(wds[ran]));

    blanksToLetters("hello", "l");
    

})
