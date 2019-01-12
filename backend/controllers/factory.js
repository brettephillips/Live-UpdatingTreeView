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
    //Object that contains failure reason
    var error = {
        type: 'error',
        reason: ''
    };

    //Validation
    if(typeof req.body.name === 'undefined' || typeof req.body.lower_bound === 'undefined' || typeof req.body.upper_bound === 'undefined') {
        error['reason'] = "Missing property";
        res.status(400).json(error);
    } else if(req.body.name.length === 0 || req.body.lower_bound.length === 0 || req.body.upper_bound.length === 0) {
        error['reason'] = "There is a missing value";
        res.status(400).json(error);
    } else if(req.body.lower_bound > req.body.upper_bound) {
        error['reason'] = "There is a missing value";
        res.status(400).json(error);
    } else if(isNaN(req.body.lower_bound) || isNaN(req.body.upper_bound)) {
        error['reason'] = "Upper and lower bounds must be a number";
        res.status(400).json(error);
    } else {
        //Sanitize the data
        req.body.name = req.sanitize(req.body.name);
        req.body.lower_bound = req.sanitize(req.body.lower_bound);
        req.body.upper_bound = req.sanitize(req.body.upper_bound);

        models.Factory.create( { 
            name: req.body.name, 
            lower_bound: req.body.lower_bound, 
            upper_bound: req.body.upper_bound
        }).then(factory => res.json(factory));
    }
};

/**
 * Function that will update a specific factory
 * based on the factory's id.
 */

exports.update = (req, res) => {
    //Object that contains failure reason
    var error = {
        type: 'error',
        reason: ''
    };

    //Validation
    if(typeof req.body.name === 'undefined' || typeof req.body.lower_bound === 'undefined' || typeof req.body.upper_bound === 'undefined' || typeof req.params.id === 'undefined') {
        error['reason'] = "Missing property";
        res.status(400).json(error);
    } else if(req.body.name.length === 0 || req.body.lower_bound.length === 0 || req.body.upper_bound.length === 0 || req.params.id.length === 0) {
        error['reason'] = "There is a missing value";
        res.status(400).json(error);
    } else if(req.body.lower_bound > req.body.upper_bound) {
        error['reason'] = "Lower bound must be less than the upper bound";
        res.status(400).json(error);
    } else if(isNaN(req.body.lower_bound) || isNaN(req.body.upper_bound) || isNaN(req.params.id)) {
        error['reason'] = "Upper bound, lower bound, and id must be a number";
        res.status(400).json(error);
    } else {
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
    }
};

/**
 * Function that will delete a factory from the DB
 * based on the factory's id.
 */

exports.remove = (req, res) => {
    //Object that contains failure reason
    var error = {
        type: 'error',
        reason: ''
    };

    //Validation
    if(typeof req.params.id === 'undefined') {
        error['reason'] = "Missing property";
        res.status(400).json(error);
    } else if(req.params.id.length === 0) {
        error['reason'] = "There is a missing value";
        res.status(400).json(error);
    } else if(isNaN(req.params.id)) {
        error['reason'] = "Id must be a number";
        res.status(400).json(error);
    } else {
        //Sanitize the data
        req.params.id = req.sanitize(req.params.id);

        models.Factory.destroy( {
            where: {
                id: req.params.id
            }
        }).then(factory => res.json(factory));
    }
};