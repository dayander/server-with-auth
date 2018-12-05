//const ideaHandler = require('');
const userHandlerPost = (require('./handlers/userHandler'));
module.exports = function (app) {
  app.post('/user', userHandlerPost)
};