const http = require("http");

http.createServer((req, res) => {
    res.setHeader();
    res.statusCode = 200;
    res.end('你说的都对');
}).listen('3002');

console.log('请访问：http://localhost:3002');
