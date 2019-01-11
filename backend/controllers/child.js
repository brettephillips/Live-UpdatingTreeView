//Import needed packages
let models = require('../models/index');

/**
 * Function that will delete a child from the DB
 * based on the factory's id.
 */

exports.remove = (req, res) => {
    //Sanitize the data
    req.params.id = req.sanitize(req.params.id);

    models.Child.destroy( {
        where: {
            FactoryId: req.params.id
        }
    }).then(child => res.json(child));
};

/**
 * Function that will create a child given
 * input from the user.
 */

exports.create = (req, res) => {
    var arr = [];
    //Sanitize the data
    var factId = req.sanitize(req.body.FactoryId);

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
};