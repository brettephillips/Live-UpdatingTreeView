//Import needed packages
let models = require('../models/index');

/**
 * Function that will get all of the factories
 * from the DB including the factory's child
 * nodes.
 */

exports.retrieve = (req, res) => {
    models.Factory.findAll( {
        include: {
            model: models.Child
        }
    }).then(factories => res.json(factories));
};

/**
 * Function that will create a factory given
 * input from the user.
 */

exports.create = (req, res) => {
    //Sanitize the data
    req.body.name = req.sanitize(req.body.name);
    req.body.lower_bound = req.sanitize(req.body.lower_bound);
    req.body.upper_bound = req.sanitize(req.body.upper_bound);

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
    //Sanitize the data
    req.body.name = req.sanitize(req.body.name);
    req.body.lower_bound = req.sanitize(req.body.lower_bound);
    req.body.upper_bound = req.sanitize(req.body.upper_bound);
    req.params.id = req.sanitize(req.params.id);

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
    //Sanitize the data
    req.params.id = req.sanitize(req.params.id);

    models.Factory.destroy( {
        where: {
            id: req.params.id
        }
    }).then(factory => res.json(factory));
};