//Import needed packages
let express = require('express');
let bodyParser = require('body-parser');
let factoryRoutes = require('./routes/factory');
let app = express();

//Set the port
var port = process.env.PORT || 3001;

//Configure the body-parser
app.use(bodyParser.urlencoded( {
    extended: true
}));
app.use(bodyParser.json());

//Configure the routes
app.use('/api', factoryRoutes);

//Start the server
app.listen(port);
