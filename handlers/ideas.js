const Users = require('../models/users');
const db = require('../dbConnection');
const jwt = require('jwt-simple');
const config = require('../config');



const Project = require('../models/Project');

exports.getProjects = function(req, res, done){
    console.log(req.params.userID)
    const userID = req.params.userID;


    Project.find({userID: userID},function (err, projects) {
        if (err){
            throw err;
        }

        res.json({projects: projects});

    });

};


exports.getSingleProject = function(req, res, done){

    const {userID, projectID} = req.params;





    Project.findOne({userID: userID, _id: projectID},function (err, project) {
        if (err){
            throw err;
        }

        console.log(project)

        res.json(project);

    });

};



exports.postProject = function (req,res,done) {

    const {projectName, projectDescription, ideas, topIdeas, dateCreated, userID} = req.body;

    const project = Project({

        projectName: projectName,
        projectDescription: projectDescription,
        ideas:ideas,
        topIdeas: topIdeas,
        dateCreated: dateCreated,
        userID: userID,

    });


    project.save(project, function (err, project) {

        if(err){
            throw err;
        }

        res.json({project: project})

    })

};



exports.putProjectName = function (req,res,done) {


    const {userID, projectID} = req.params;

    console.log(req.body)



    Project.findOneAndUpdate({userID: userID, _id: projectID}, {...req.body},function (err, project) {
        if (err){
            throw err;
        }

        console.log(project)

        res.json(project);

    });

}


exports.putIdea = function (req,res,done) {


    const {userID, projectID} = req.params;

    const idea = req.body.idea;

    console.log(idea)



    Project.findOneAndUpdate({userID: userID, _id: projectID}, {$push:{ideas:{ideaString:req.body.idea, priority: req.body.priority, dateCreated: req.body.dateCreated  }}}, {new:true},function (err, project) {
        if (err){
            throw err;
        }

        console.log(project)

        res.json(project);

    });

}


exports.deleteIdea = function (req,res,done) {


    const {userID, projectID} = req.params;

    const {deleteIdea} = req.body;

    console.log(deleteIdea)
    console.log(req.body)



        Project.findOneAndUpdate({userID: userID, _id: projectID}, {$pull:{ideas:req.body}}, {new: true},function (err, project) {
            if (err){
                throw err;
            }

            console.log(project.ideas);



            res.json(project);

        });


};


exports.updatePriority = function (req,res,done) {


    const {userID, projectID} = req.params;

    const ideaToUpdate = req.body;



    Project.updateOne({userID: userID, _id: projectID, "ideas.ideaString":ideaToUpdate.ideaString }, {$set:{"ideas.$.priority": ideaToUpdate.priority }}, {new: true},function (err, project) {
        if (err){
            throw err;
        }

        console.log('project', project);



        res.json(project);

    });


};