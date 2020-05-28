const express = require('express')
const app = express();
const port = 3200;

const students = [
    { id: 1, name: 'Chris' },
    { id: 2, name: 'Philippe' },
    { id: 3, name: 'Vincent' },
]

// routes
app.get(['/', /[0-9]{2,4}$/, '/toto'], (req, res) => {
    res.send('ok')
})

// route avec paramètre
app.get('/students/:id', (req, res) => {
    var student = students.filter(s => s.id == req.params.id);
    if (student.length > 0) {
        res.send(student[0]);
    } else {
        res.sendStatus(404);
    }
})

// querystring
app.get('/search', (req, res) => {
    var { q } = req.query;
    res.send(`Recherche de "${q}" ...`);
})

app.get('/html', (req, res) => {
    const { title } = req.query;
    var body = `
        <html>
            <head><title>HTML</title></head>
            <body>
                <h1>${title}</h1>
                <ul>
                    ${students.map(s => `<li>${s.name}</li>`)}
                </ul>
            </body>
        </html>
    `;
    res.send(body);
})

app.delete('/article', (req, res) => {
    res.send('article deleted');
})

app.listen(port, () => {
    console.log(`Server runing on ${port} ...`)
})