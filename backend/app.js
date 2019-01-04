//Import needed packages
let express = require('express');
let bodyParser = require('body-parser');
let factoryRoutes = require('./routes/factory');
let app = express();

//Configure the body-parser
app.use(bodyParser.urlencoded( {
    extended: true
}));
app.use(bodyParser.json());

//Configure the routes
app.use('/api', factoryRoutes);

module.exports = app;