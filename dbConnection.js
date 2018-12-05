var mongoose = require('mongoose');


const dbURI = "mongodb://dayander:Burton12!@ideatracker-shard-00-00-wwwir.mongodb.net:27017,ideatracker-shard-00-01-wwwir.mongodb.net:27017,ideatracker-shard-00-02-wwwir.mongodb.net:27017/tracker?ssl=true&replicaSet=ideaTracker-shard-0&authSource=admin&retryWrites=true";

mongoose.connect(dbURI);


const db = mongoose.connection;

db.on('error', console.error.bind(console, '# MongoDB connection error:'));


module.exports  = db;



