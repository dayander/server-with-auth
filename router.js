//const ideaHandler = require('');
const Authentication = require('./handlers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', {session: false});
const requireSignin = passport.authenticate('local', {session: false});
const ideas = require('./handlers/ideas');


module.exports = function (app) {

  app.get('/', requireAuth, function (req, res) {
      res.send('hi there');
  });


  app.get('/dashboard', requireSignin, );
    app.get('/projects/:userID',  ideas.getProjects );
    app.post('/projects', requireAuth, ideas.postProject );


  app.post('/login', requireSignin, Authentication.login );
  app.post('/signup', Authentication.signup);



};