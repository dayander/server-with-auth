const Users = require('../models/users');
const db = require('../dbConnection');


function userHandlerPost(req, res, next) {
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

        Users.create(user, function(err, user){
            if(err){
                throw err;
            }
            return res.json(user);
        })




    });




    //return res.send(user)


}


module.exports = userHandlerPost;


