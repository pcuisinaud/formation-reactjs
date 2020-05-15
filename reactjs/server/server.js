const http = require('http');

const teams = ["Juve", "Strasbourg", "Madrid"]

http.createServer((req, res) => {
    console.log(req.url);
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.url == '/teams') {
        res.write(JSON.stringify(teams));
    }
    res.end();
}).listen(8080);
console.log('Server running on 8080');