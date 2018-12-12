let mongoose = require('mongoose');



let ideaSchema = mongoose.Schema({
    ideaString: String,
    priority: {type:String, enum: ['Top','Middle', 'low']},
    userID: String,



});






let Idea = mongoose.model('Idea', ideaSchema);


module.exports = Idea;