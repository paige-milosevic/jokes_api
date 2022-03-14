const jokeController = require('../controllers/jokes.controller');

module.exports = (app) => {
    app.get('/api/jokes', jokeController.getAllJokes);

    app.post('/api/jokes', jokeController.createJoke);
}