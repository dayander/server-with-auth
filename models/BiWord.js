let mongoose = require('mongoose');



let biWordSchema = mongoose.Schema({
    wordOne: String,
    wordTwo: String,
    userID: String,
    projectId: String,
    dateViewed: Date,
    ideasCreatedFrom: [],
    numberOfIdeas: Int32,



});






let BiWord = mongoose.model('BiWord', biWordSchema);


module.exports = BiWord;