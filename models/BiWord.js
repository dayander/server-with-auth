let mongoose = require('mongoose');



let biWordSchema = mongoose.Schema({
    wordOne: Object,
    wordTwo: Object,
    userID: String,
    projectId: String,
    dateViewed: Date,
    ideasCreatedFrom: [],
    numberOfIdeas: Number,



});






let BiWord = mongoose.model('BiWord', biWordSchema);


module.exports = BiWord;