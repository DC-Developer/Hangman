var wds = ['PANDA', 'DONKEY', 'CRAZY', 'ENORMOUS', 'DINOSAUR', 'PYSCHOTHERAPY', 'EXTRATERRESTRIAL', 'JUPITER', 'RELATIVITY'];
var guessTotal = 15;
var guesses = [];
var wordGuessed= ''; 

var ran = Math.floor(Math.random() * wds.length);

function wordBlanks(word){
    var result = '';

    for(var i=0; i<word.length; i++){
        result += '_';
    }
    return result;
}
function findIndex(word, letter){

    var index = word.indexOf(letter);

    console.log('Index: ', index);
}



$(document).ready(function(){
    console.log(wds[ran]);

    console.log(wordBlanks(wds[ran]));

    findIndex("hello", "h");
    

})
