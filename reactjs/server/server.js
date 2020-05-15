const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

let teams = ["Juve", "Strasbourg", "Madrid"]

const expectedUser = "admin"
const expectedPass = "pass"

// middelwar
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
})
app.use(bodyParser.json());

// table de routage
app.get('/', (req, res) => {
    res.send('Racine')
})
app.get('/teams', (req, res) => {
    res.json(teams);
})
app.post('/teams', (req, res) => {
    console.log(req.body);
    const {name} = req.body.team;
    if(teams.indexOf(name) > -1) {
        res.sendStatus(400);
    } else {
        teams.push(name);
        res.sendStatus(200);
    }    
})
app.post('/login', (req, res) => {
    console.log(req.body);
    const {username, password} = req.body;
    if(username == expectedUser && password == expectedPass) {
        res.sendStatus(200);
    } else {
        res.sendStatus(403);
    }    
})

app.listen(8080, () => {
    console.log('Server running on 8080')
})

/*
http.createServer((req, res) => {
    console.log(req.url);
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.url == '/teams') {
        res.write(JSON.stringify(teams));
    }
    res.end();
}).listen(8080);
console.log('Server running on 8080');
*/