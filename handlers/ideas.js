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