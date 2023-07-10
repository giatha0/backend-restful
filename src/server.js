require('dotenv').config();
const express = require('express');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const apiRoutes = require('./routes/api');
const fileUpload = require('express-fileupload');

const connection = require('./config/database');

const app = express();
const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME || 'localhost'

// config file upload
app.use(fileUpload());

// config req.body
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// config template engine
configViewEngine(app);

// config routes
app.use('/', webRoutes);
app.use('/v1/api/', apiRoutes);


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