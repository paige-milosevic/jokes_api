const JokesModel = require('../models/jokes.model');

module.exports.getAllJokes = (req, res) => {
    console.log('Inside get all jokes')
    JokesModel.find()
            .then(allJokesObjects => {
                console.log('Found all jokes sucessfully');
                console.log(allJokesObjects);
                return res.json(allJokesObjects);
            })
            .catch((err) => {
                console.log("error:" + err);
                return res.json(err);
            })
}

module.exports.createJoke = (req, res) => {
    console.log('Inside create a joke')
    JokesModel.create(req.body)
            .then(newJokeObject => {
                console.log('joke created sucessfully');
                return res.json(newJokeObject);
            })
            .catch((err) => {
                console.log('error:' + err);
            })
}

