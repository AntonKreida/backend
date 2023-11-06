const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

const server = http.createServer((req, res) => {
    const urlBase = new URL(req.url, 'http://127.0.0.1');
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

server.listen(3003, () => {
    console.log('Server running on port 3003')
})