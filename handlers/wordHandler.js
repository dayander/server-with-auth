var Word = require('../models/Word');
let BiWord = require('../models/BiWord');






exports.postWord = function (req, res, done) {

    let word = new Word;
    let userID = req.params.userID;
    let wordObj = req.body;



    word.userID = userID;
    word.wordString = wordObj.wordString;
    word.dateCreated = new Date();


    Word.create(word, function (err, word) {

        res.json(word);

    })


};




exports.getWords = function (req, res, done) {

    Word.find({}, function (err, words) {

        if(err){
            res.send(err)
        }
        wordToBiWord(words);
        //res.json(words)


    })


};







function wordToBiWord(wordArray) {
    console.log('begin')

    for(let i = 0; i< wordArray.length -1; i++){
        let firstWord = wordArray[i];

        for(let j = i+1; j<wordArray.length; j++){

            let secondWord = wordArray[j];


            let biWord = new  BiWord;
            biWord.wordOne = firstWord;
            biWord.wordTwo = secondWord;

            let biWordTwo = new  BiWord;
            biWordTwo.wordOne = secondWord;
            biWordTwo.wordTwo = firstWord;


            //console.log('bi-word-one', biWord)
            //console.log('bi-word-two', biWordTwo);


            let biWordArrFromDB;


            BiWord.find({biWord})
                .then(function (biwords) {
                    if(biwords.length < 1){
                        console.log('addding')
                        BiWord.create(biWord, function (err, biword) {
                            console.log('created biword');

                        })
                    }else{
                        console.log("already exists")
                    }
                })







        }




    }


}




exports.biWordExists = function (req, res, done) {






    BiWord.find({"wordOne.wordString":"messed", "wordTwo.wordString": "b"}, function (err,biword) {

        res.json(biword)

    })


}