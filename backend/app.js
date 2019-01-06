//Import needed packages
let express = require('express');
let bodyParser = require('body-parser');
let factoryRoutes = require('./routes/factory');
let childRoutes = require('./routes/child');
let app = express();

//Configure the body-parser
app.use(bodyParser.urlencoded( {
    extended: true
}));
app.use(bodyParser.json());

//For testing purposes
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//Configure the routes
app.use('/api', factoryRoutes);
app.use('/api', childRoutes);

module.exports = app;