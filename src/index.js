const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config()

const app = express();

const {
    PORT = 3000,
    API_URL = 'http://127.0.0.1',
    DATABASE_URL,
} = process.env

mongoose.connect("mongodb://127.0.0.1:27017/backend")
.then(() => console.log('Connected to MongoDB'))
.catch(error => console.log(error));

app.listen(PORT, () => {
    console.log(`Server is running on ${API_URL}:${PORT}`)
})