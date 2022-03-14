const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extend: true}));

require("./config/mongoose.config");

app.get('/', (req, res) => {
    return res.json({ message: 'Hello World' });
})

app.listen(8000, () => {
    console.log('You have sucessfully started your server on port 8000');
})