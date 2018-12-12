let mongoose = require('mongoose');

let projctSchema = mongoose.Schema({
    projectName: String,
     projectDescription: String,
     ideas:[],
     topIdeas: [],
    dateCreated: Date,
     userID: String,

});






let Project = mongoose.model('Project', projctSchema);


module.exports = Project;