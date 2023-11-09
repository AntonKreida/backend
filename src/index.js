const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRouter = require('./routers/user');
const bookRouter = require('./routers/book');

const app = express();
dotenv.config()

const {
    PORT = 3000,
    API_URL = 'http://127.0.0.1',
    DATABASE_URL,
} = process.env

mongoose.connect(`${DATABASE_URL}/backend`)
.then(() => console.log('Connected to MongoDB'))
.catch(error => console.log(error));

app.use(express.json());

app.use(userRouter);
app.use(bookRouter);

app.listen(PORT, () => {
    console.log(`Server is running on ${API_URL}:${PORT}`)
})