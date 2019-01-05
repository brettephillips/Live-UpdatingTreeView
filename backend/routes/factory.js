//Import needed packages
let express = require('express');
let router = express.Router();
let factoryController = require('../controllers/factory');

//Set the routes for the factories
router.route('/factories')
    .get(factoryController.retrieve)
    .post(factoryController.create);

router.route('/factories/:id')
    .put(factoryController.update)
    .delete(factoryController.remove);

//Export the routes
module.exports = router;
