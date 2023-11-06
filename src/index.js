const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config()

const {
    PORT = 3000,
    API_URL = 'http://127.0.0.1',
    DATABASE_URL,
} = process.env

mongoose.connect(`${DATABASE_URL}`)
.then(() => console.log('Connected to MongoDB'))
.catch(error => console.log(error));

const server = http.createServer((req, res) => {
    const urlBase = new URL(req.url, `${API_URL}`);
    const urlParts = url.parse(req.url, true);
    filePath = path.join(__dirname, './date', 'users.json');

    if(urlBase.pathname === '/' && Object.keys(urlParts.query).length === 0) {
        res.statusCode = 200;
        res.end('Hello World');
        return;
    }

    if (urlBase.searchParams.has('hello') && !urlBase.searchParams.get('hello')) {
        res.statusCode = 400;
        res.end('Enter a name');
        return;
    }

    if (urlBase.searchParams.has('hello') && urlBase.searchParams.get('hello')) {
        res.statusCode = 200;
        res.end(`Hello, ${urlBase.searchParams?.get('hello')}`);
        return;
    }

    if(urlBase.searchParams.has('users') && !urlBase.searchParams.get('users')) {
        req.headers['Content-Type'] = 'application/json';
        fs.readFile(filePath, (error, data) => {
            if(!error) {
                res.writeHead(200, {'Content-Type': 'application/json'});
                res.end(data);
                return;
            }
            res.statusCode = 500;
            res.end('Server Error');
        })
        return;
    }

    if(!urlBase.searchParams.has('users') || !urlBase.searchParams.get('hello')) {
        res.statusCode = 500;
        res.end('Server Error');
    }
})

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT} in on url ${API_URL}`);
})