//Import needed packages
let models = require('../models/index');

/**
 * Function that will get all of the factories
 * from the DB.
 */

exports.retrieve = (req, res) => {
    models.Factory.findAll().then(factories => res.json(factories));
};

/**
 * Function that will create a factory given
 * input from the user.
 */

exports.create = (req, res) => {
    models.Factory.create( { 
        name: req.body.name, 
        lower_bound: req.body.lower_bound, 
        upper_bound: req.body.upper_bound
    }).then(factory => res.json(factory));
};

/**
 * Function that will update a specific factory
 * based on the factory's id.
 */

exports.update = (req, res) => {
    models.Factory.update( {
        name: req.body.name, 
        lower_bound: req.body.lower_bound, 
        upper_bound: req.body.upper_bound
    }, {
        where: {
            id: req.params.id
        }
    }).then(factory => res.json(factory));
};

/**
 * Function that will delete a factory from the DB
 * based on the factory's id.
 */

exports.remove = (req, res) => {
    models.Factory.destroy( {
        where: {
            id: req.params.id
        }
    }).then(factory => res.json(factory));
};