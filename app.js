const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const rdvRoutes = require('./routes/rdv.rt');
const mysqlConnection = require('./db-connection');  
const compression = require('compression');
console.log({env: process.env.CLEARDB_DATABASE_URL});
app.use((req, res, next) => {
     
    res.setHeader('Access-Control-Allow-Origin', 'https://newctfrontend.herokuapp.com/');
// newctfrontend.herokuapp.com
    res.setHeader('Access-Control-Allow-Headers', 
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');

    res.setHeader('Access-Control-Allow-Methods', 
    'GET, POST, PUT, DELETE, PATCH, OPTIONS');

    next();
  });

app.use(bodyParser.json());

app.use(compression());

app.use('/api/rdvs', rdvRoutes);


module.exports = app; 