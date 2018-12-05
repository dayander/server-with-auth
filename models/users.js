var mongoose = require('mongoose');
const bcrypt = require('bcrypt');


var userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {type: String, unique: true, lowercase: true},
    password: String,


});


userSchema.pre('save', function(next) {

    const user = this;

    console.log(user);

    bcrypt.genSalt(10, function (err, salt) {
        if(err){return next(err)}


        bcrypt.hash(user.password, salt, function (err, hash) {


            if(err){return next(err)}
            

            user.password = hash;



            next();

        })
    })



});


var Users = mongoose.model('Users', userSchema);


module.exports = Users;