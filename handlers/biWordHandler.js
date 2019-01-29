let BiWord = require('../models/BiWord');





exports.getBiWord = function (req, res, done) {


    BiWord.find({}, function (err, biwords) {


        res.json(biwords)

    })
};




exports.getRandom50BiWords = function (req, res, done) {


    BiWord.aggregate([{$sample:{size:50}}], function (err, biwords) {


        res.json(biwords)

    })

}