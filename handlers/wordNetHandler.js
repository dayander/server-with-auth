const wordNet = require('node-wordnet');
let wordNets = new wordNet();


exports.wordNetTest = function(req, res, done){

    let wordArr = [];

    wordNets.lookup('giant', function (results) {
        results.forEach(function (word) {
            console.log(word.synonyms)
            wordArr.push(word.lemma)
        }

        )

        res.json(wordArr);

    })



};