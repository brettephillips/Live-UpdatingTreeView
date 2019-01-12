//Import needed packages
let models = require('../models/index');

/**
 * Function that will delete a child from the DB
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

        models.Child.destroy( {
            where: {
                FactoryId: req.params.id
            }
        }).then(child => res.json(child));
    }
};

/**
 * Function that will create a child given
 * input from the user.
 */

exports.create = (req, res) => {
    var arr = [];
    //Object that contains failure reason
    var error = {
        type: 'error',
        reason: ''
    };

    //Validation
    if(typeof req.body.FactoryId === 'undefined' || typeof req.body.number === 'undefined') {
        error['reason'] = "Missing property";
        res.status(400).json(error);
    } else if(req.body.FactoryId.length === 0 || req.body.number.length === 0) {
        error['reason'] = "There is a missing value";
        res.status(400).json(error);
    } else if(isNaN(req.body.FactoryId) || isNaN(req.body.number)) {
        error['reason'] = "Id and generation number must be a number";
        res.status(400).json(error);
    } else {
        //Sanitize the data
        var factId = req.sanitize(req.body.FactoryId);
        req.body.number = req.sanitize(req.body.number);

        //Loop through and push objects to array
        //Objects contain details for a new child
        for(var i = 0; i < req.body.number; i++) {
            var randomNum = (Math.floor(Math.random() * (req.body.upper_bound - req.body.lower_bound)) + req.body.lower_bound)
            
            var obj = {
                number: randomNum,
                FactoryId: factId
            };

            arr.push(obj);
        }

        models.Child.bulkCreate(
            arr
        ).then(children => res.json(children));
    }
};