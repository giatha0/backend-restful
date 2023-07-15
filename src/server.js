require('dotenv').config();
const express = require('express');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const apiRoutes = require('./routes/api');
const fileUpload = require('express-fileupload');
const { MongoClient } = require('mongodb');

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
        // using mongoose
        await connection();


        // using mongodb driver
        // connection URL
        const url = process.env.DB_HOST_WITH_DRIVER;
        const client = new MongoClient(url);
        const dbName = process.env.DB_NAME;

        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db(dbName);
        const collection = db.collection('customers');



        // collection.insertOne({
        //     name: 'test',
        //     address: [1, 2]
        // });
        // collection.insertOne({ address: 'hanoi' });
        // collection.insertOne({ number: [1, 2, 3] })

        let rs = await collection.find({}).toArray();
        // console.log('rs', rs);

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