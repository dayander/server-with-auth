//const ideaHandler = require('');
const Authentication = require('./handlers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', {session: false});
const requireSignin = passport.authenticate('local', {session: false});
const ideas = require('./handlers/ideas');
const words = require('./handlers/wordHandler');
const biword = require('./handlers/biWordHandler');

const ML = require('./tensorflow/example');
const WordNet = require('./handlers/wordNetHandler');



module.exports = function (app) {

  app.get('/', requireAuth, function (req, res) {
      res.send('hi there');
  });


  app.get('/dashboard', requireSignin, );
    app.get('/projects/:userID',  ideas.getProjects );

    app.get('/projects/:userID/:projectID', ideas.getSingleProject);
    app.put('/projects/:userID/:projectID', ideas.putProjectName);
    app.post('/create-project/:userID', ideas.createNewProject);

    app.delete('/delete-project/:userID/:projectID', ideas.deleteProject);

    app.put('/ideas/:userID/:projectID', ideas.putIdea);
    app.patch('/ideas/:userID/:projectID', ideas.deleteIdea);
    app.patch('/idea-priority/:userID/:projectID', ideas.updatePriority);


    app.post('/projects', requireAuth, ideas.postProject );


  app.post('/login', requireSignin, Authentication.login );
  app.post('/signup', Authentication.signup);


  app.post('/words/:userID', words.postWord);
    app.get('/words', words.getWords);


    app.get('/biwords', biword.getBiWord);
    app.get('/biword50', biword.getRandom50BiWords);

    app.get('/ml', ML.ML);


    app.get('/wordnet', WordNet.wordNetTest);
    app.get('/biwordexists', words.biWordExists);



};