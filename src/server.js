const express = require('express')
const path = require('path')


const app = express()
const port = 8080


// config template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/thao', (req, res) => {
    res.render('sample')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})