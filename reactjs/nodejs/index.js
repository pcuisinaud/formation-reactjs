const express = require('express')
const app = express();
const port = 3200;

const students = [
    { id: 1, name: 'Chris' },
    { id: 2, name: 'Philippe' },
    { id: 3, name: 'Vincent' },
]

// ** Middelwares **

//app.use((req, res, next) => {
    // console.log(req.headers);
    // if(req.headers['user-agent']
    //     .toLowerCase()
    //     .indexOf('mozilla') != -1) {
    //     return res.sendStatus(401);
    // } else {
    //     next();
    // }
//})

app.use(express.static(`${__dirname}/public`));

// ** Routing **

app.get(['/', /[0-9]{2,4}$/, '/toto'], (req, res) => {
    res.send('ok')
})

app.get('/students', (req, res) => {    
    res.json(students);
})
// route avec paramètre
app.get('/students/:id', (req, res) => {
    var student = students.filter(s => s.id == req.params.id);
    if (student.length > 0) {
        res.json(student[0]);
    } else {
        res.sendStatus(404);
    }
})

// querystring
app.get('/search', (req, res) => {
    var { q } = req.query;
    res.send(`Recherche de "${q}" ...`);
})

app.get('/logo', (req,res) => {
    res.sendFile(`${__dirname}/public/googlelogo.png`);
});

app.get('/html', (req, res) => {
    const { title } = req.query;
    var body = `
        <html>
            <head><title>HTML</title></head>
            <body>
                <h1>${title}</h1>
                <ul>
                    ${students.map(s => `<li>${s.name}</li>`)}
                    <img src="googlelogo.png" />
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