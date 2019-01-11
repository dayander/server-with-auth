var Word = require('../models/Word');






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

        res.json(words)

    })


};