const express = require('express');
const path = require('path');
require('dotenv').config();


const app = express();
const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME || 'localhost'


// config template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// config static file
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/thao', (req, res) => {
    res.render('sample')
})


app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})