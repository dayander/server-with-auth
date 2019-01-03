let mongoose = require('mongoose');



let ideaSchema = mongoose.Schema({
    ideaString: String,
    priority: Int32,
    userID: String,
    dateCreated: Date,



});






let Idea = mongoose.model('Idea', ideaSchema);


module.exports = Idea;