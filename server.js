// node.js modules
const fs = require('fs');
// express modules
const express = require('express');
const cors = require('cors');
// monogodb modules
const mongoose = require('mongoose');
const units = require('./models/units.js');
const unit = require('./models/unit.js');


const serverAddress='192.168.1.100';
const serverPort='3000';

const mongodbUserName='admin';
const mongodbPassword='1234';
const mongodbCluster='mycluster';
const mongodbUrl =`mongodb+srv://${mongodbUserName}:${mongodbPassword}@${mongodbCluster}.tvdiyu4.mongodb.net/?retryWrites=true&w=majority&appName=${mongodbCluster}`; // replace with your MongoDB URL

const app = express();
console.log('Render Start Command');
mongoose.connect(mongodbUrl)
.then((result) => {
    console.log('Connected to MongoDB');
    app.listen(serverPort,serverAddress,() => {
        console.log('Server running');
    });
})
.catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

app.use(cors()); // allow requests from other origins
app.use(express.json());
app.use(express.static('public'));

app.post('/api/data', (req, res) => {
  console.log(req.body);
  res.json({ message: 'Data received!' });
});

app.get('/', (req, res) => {
    console.log('hiiiiiiii');
    console.log(req.url);
    console.log(req.method);
    console.log(req.ip);
    res.sendFile(__dirname + '/index.html');
});
app.get('/addUnit', (req, res) => {
    console.log(req.url);
    console.log(req.method);
    console.log(req.ip);
    const newUnit = new units({
        name: 'Unit 1',
        description: 'This is a test unit',
        status: 'active'
    });
    newUnit.save()
    .then(() => {
        console.log('Unit added successfully');
        res.json({ message: 'Unit added successfully' });
    })
    .catch((err) => {
        console.error('Error adding unit:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    });
    
});
app.get('/findUnit', (req, res) => {
    console.log(req.url);
    console.log(req.method);
    console.log(req.ip);
    units.find()
    .then((result) => {
        console.log('Unit found successfully');
        res.send(result);
    })
    .catch((err) => {
        console.error('Error loading unit:', err);
    });
    
});
app.get('/units', (req, res) => {
    console.log(req.url);
    console.log(req.method);
    console.log(req.ip);
    
});
/*
app.get('/api/data', (req, res) => {
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading data file:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.json(JSON.parse(data));
    });
});
*/
