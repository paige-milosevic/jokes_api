const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/8000', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong with connecting to the database', err));