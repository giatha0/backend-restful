require('dotenv').config();
const express = require('express');
const path = require('path');
const configViewEngine = require('./config/viewEngine');

const app = express();
const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME || 'localhost'

// config template engine
configViewEngine(app);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/thao', (req, res) => {
    res.render('sample')
})


app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})