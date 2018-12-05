const Users = require('../models/users');
const db = require('../dbConnection');
const jwt = require('jwt-simple');
const config = require('../config');


function tokenForUser(user) {

    const timeStamp = new Date().getTime();

    return jwt.encode({sub: user._id, iat: timeStamp}, config.secret)
}


exports.login = function(req, res, done){
    res.send({token: tokenForUser(req.user)});
};






exports.signup = function(req, res, next) {
    var {fistName, lastName, email, password} = req.body;

    //check to see if user exists

    Users.findOne({email: email}, function (err, existingUser) {


        if(existingUser){
            return res.status(422).send("Email already in use")
        }

        const user = new Users({
            firstName: fistName,
            lastName: lastName,
            email: email,
            password: password
        })

        user.save(user, function(err, user){
            if(err){
                throw err;
            }
            return res.json({token: tokenForUser(user)});
        })




    });




    //return res.send(user)


};




