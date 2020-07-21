const mySql = require('mysql');
  
  var mySqlConnection;
  
  mySqlConnection = mySql.createPool(process.env.CLEARDB_DATABASE_URL); // Recreate the connection, since
                                                  

module.exports = mySqlConnection;

// let mySqlConnection = mySql.createConnection(process.env.CLEARDB_DATABASE_URL);

// mySqlConnection.connect((err)=>{
//     if(!err){
//         console.log('Connected');
//     }
//     else{
//         console.log('Not connected'+ JSON.stringify(err,undefined,2));
//     }
// })


// { 
    // host: 'localhost',user: 'root', password:'passwordroot', database: 'clinique-taslima',
    //  multipleStatements: true
     //CLEARDB_DATABASE_URL
//  }