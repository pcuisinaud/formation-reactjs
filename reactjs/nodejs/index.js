const fs = require('fs')
const express = require('express')
const bodyParser = require('body-parser')
const formidable = require('formidable')
const mysql = require('mysql')
const bcrypt = require('bcrypt');
const app = express();
const port = 3200;

// console.log(process.env);

// ** Connexion à MySQL **

conn = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    database: 'reactjs',
    user: 'root',
    password: ''
});

conn.connect((err) => {
    if (err) console.error(err);
})

// ** View Engine **

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// ** Middelwares **

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/public`));

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

// ** Routing **

const students = [
    { id: 1, name: 'Chris' },
    { id: 2, name: 'Philippe' },
    { id: 3, name: 'Vincent' },
]

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

app.get('/logo', (req, res) => {
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

app.get('/login', (req, res) => {
    res.sendFile(`${__dirname}/public/login.html`);
})
app.post(['/login', '/login.html'], (req, res) => {
    //res.json(req.body);
    const { username, password } = req.body;

    var q = "SELECT password FROM users where username=?";
    q = mysql.format(q, [username]);
    conn.query(q, (err, result) => {
        if(err || result.length == 0) {
            return res.sendStatus(403);
        }
        const hash = result[0].password;
        console.log(hash);
        bcrypt.compare(password, hash, (err, same) => {
            if(!same) {
                return  res.sendStatus(403);
            }
            res.sendStatus(200);
        })
    });
})

app.post('/ajax', (req, res) => {
    console.log(req.body);
    res.json(req.body);
})

app.get('/jsx', (req, res) => {
    res.render('index', { name: 'John' });
});

app.post("/user", (req, res) => {
    const { username, password } = req.body;
    // vérifier les inputs !!!
    bcrypt.hash(password, 8, (err, hash) => {
        var q = "INSERT INTO users (username, password) VALUES (?, ?)";
        q = mysql.format(q, [username, hash]);
        conn.query(q, (err, result) => {
            res.sendStatus(201);
        });
    })
});

app.listen(port, () => {
    console.log(`Server running on ${port} ...`)
})