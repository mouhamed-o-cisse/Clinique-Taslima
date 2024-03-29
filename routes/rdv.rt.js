const express = require('express');
const router = express.Router();
const mysqlConnection = require('../db-connection');
 

//To get all rdvs
router.get('/get-rdvs', (req, res, next)=>{
   mysqlConnection.query("SELECT * FROM rdvs ORDER BY rdv_id DESC ", (err, rows, fields)=>{
      if(!err){
          res.send(rows);
      }
      else{
          console.log(err)
      }
   })
});

// To get one rdv (IT'S WORKING BUT I DON'T NEED IT RIGHT NOW)
// router.get('/:id', (req, res, next)=>{
//     mysqlConnection.query("SELECT * FROM rdvs WHERE id=?", [req.params.id], (err, rows, fields)=>{
//        if(!err){
//            res.send(rows);
//        }
//        else{
//            console.log(err)
//        }
//     })
//  });


//rest api to create a new record into mysql database
router.post('/add-rdv', function (req, res) { 
    mysqlConnection.query('INSERT INTO rdvs SET speciality=?, firstName=?, lastName=?, phoneNumber=?, \
    date=?',
        [req.body.speciality, req.body.firstName, req.body.lastName, req.body.phoneNumber, req.body.date] , 
         function (error, results, fields) {
             if (error) throw error;      
             console.log(results);
             res.end(JSON.stringify(results)); 
            }
    )
});

module.exports = router;

 