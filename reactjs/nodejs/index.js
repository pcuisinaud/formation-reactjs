const express = require('express')
const app = express();
const port = 3200;

// routes
app.get('/', (req, res) => {
    res.send('ok')
})

app.delete('/article', (req, res) => {
    res.send('article deleted');
})

app.listen(port, () => {
    console.log(`Server runing on ${port} ...`)
})