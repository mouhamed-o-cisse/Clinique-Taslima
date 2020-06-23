const mySql = require('mysql');

let mySqlConnection = mySql.createConnection(process.env.CLEARDB_DATABASE_URL);

mySqlConnection.connect((err)=>{
    if(!err){
        console.log('Connected');
    }
    else{
        console.log('Not connected'+ JSON.stringify(err,undefined,2));
    }
})

// 
  
//   var mySqlConnection;
  
//   function handleDisconnect() {
//     mySqlConnection = mySql.createConnection(process.env.CLEARDB_DATABASE_URL); // Recreate the connection, since
//                                                     // the old one cannot be reused.
  
//     mySqlConnection.connect(function(err) {              // The server is either down
//       if(err) {                                     // or restarting (takes a while sometimes).
//         console.log('error when connecting to db:', err);
//         setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
//       }                                     // to avoid a hot loop, and to allow our node script to
//     });                                     // process asynchronous requests in the meantime.
//                                             // If you're also serving http, display a 503 error.
//     mySqlConnection.on('error', function(err) {
//       console.log('db error', err);
//       if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
//         handleDisconnect();                         // lost due to either server restart, or a
//       } else {                                      // connnection idle timeout (the wait_timeout
//         throw err;                                  // server variable configures this)
//       }
//     });
//   }
  
//   handleDisconnect();

module.exports = mySqlConnection;

// { 
    // host: 'localhost',user: 'root', password:'passwordroot', database: 'clinique-taslima',
    //  multipleStatements: true
     //CLEARDB_DATABASE_URL
//  }