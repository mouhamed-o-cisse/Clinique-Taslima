const mySql = require('mysql');

let mySqlConnection = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'passwordroot',
    database: 'clinique-taslima',
    multipleStatements: true

});

mySqlConnection.connect((err)=>{
    if(!err){
        console.log('Connected');
    }
    else{
        console.log('Not connected'+ JSON.stringify(err,undefined,2));
    }
})

module.exports = mySqlConnection;