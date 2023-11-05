const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const url = new URL(req.url, 'http://127.0.0.1');
    filePath = path.join(__dirname, './date', 'users.json');

    if(url.pathname === '/') {
        res.statusCode = 200;
        res.end('Hello World');
        return;
    }

    if (url.searchParams.has('hello') && !url.searchParams.get('hello')) {
        res.statusCode = 400;
        res.end('Enter a name');
        return;
    }

    if (url.searchParams.has('hello') && url.searchParams.get('hello')) {
        res.statusCode = 200;
        res.end(`Hello, ${url.searchParams.get('hello')}`);
        return;
    }

    if(url.searchParams.has('users') && !url.searchParams.get('users')) {
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

    if(!url.searchParams.has('users') || !url.searchParams.get('hello')) {
        res.statusCode = 500;
        res.end('Server Error');
    }
})

server.listen(3003, () => {
    console.log('Server running on port 3003')
})