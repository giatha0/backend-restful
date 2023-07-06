require('dotenv').config();
const express = require('express');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database');

const app = express();
const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME || 'localhost'

// config req.body
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// config template engine
configViewEngine(app);

// config routes
app.use('/', webRoutes);

// test connection

(async () => {
    try {
        await connection();
        app.listen(port, hostname, () => {
            console.log(`Example app listening on port ${port}`)
        })
    } catch (error) {
        console.log('error', error);
    }
})()


// app.listen(port, hostname, () => {
//     console.log(`Example app listening on port ${port}`)
// })