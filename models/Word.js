let mongoose = require('mongoose');



let wordSchema = mongoose.Schema({
    wordString: String,
    ideasCreated: Array,
    userID: String,
    dateCreated: Date,
    children: [],



});






let Word = mongoose.model('Word', wordSchema);


module.exports = Word;