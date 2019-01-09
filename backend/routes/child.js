//Import needed packages
let express = require('express');
let router = express.Router();
let childController = require('../controllers/child');

//Set the routes for the children
router.route('/children')
    .post(childController.create);

router.route('/children/:id')
    .delete(childController.remove);

//Export the routes
module.exports = router;
