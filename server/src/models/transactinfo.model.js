var dbConn = require('../config/db.config');

var transactinfoRecords = function(records){
    this.date = records.date;
    this.empid = records.empid;
    this.clientid = records.clientid;
    this.taskid = records.taskid;
    this.duration = records.duration;
    this.description = records.description;
}

//get all records
transactinfoRecords.getAllRecords = (result) =>{
    dbConn.query('SELECT * FROM transactinfo', (err, res)=>{
        if(err){
            console.log('Error while fetching records');
            result(null, err);
        }else{
            console.log('Records fetched successfully');
            result(null, res);
        }
    })
}

//get record by id
transactinfoRecords.getRecordByID = (trid, result) =>{
    dbConn.query('SELECT * FROM transactinfo WHERE trid=?', trid, (err, res)=>{
        if(err){
            console.log('Error while fetching a record by trid',err);
            result(null, err);
        }else{
            console.log('Record fetched successfully');
            result(null, res);
        }
    })
}

//create new record
transactinfoRecords.createRecord = (recordReqdata, result) =>{
    dbConn.query('INSERT INTO transactinfo SET ?', recordReqdata, (err, res)=>{
        if(err){
            console.log('Error while inserting a record');
            result(null, err);
        }else{
            console.log('Record created successfully');
            result(null, res);
        }
    })
}

//update a record by id
transactinfoRecords.updateRecord = (trid, recordReqdata, result) =>{
    dbConn.query("UPDATE transactinfo SET date=?, empid=?, clientid=?, taskid=?, duration=?, description=? WHERE trid=?", [recordReqdata.date, recordReqdata.empid, recordReqdata.clientid, recordReqdata.taskid, recordReqdata.duration, recordReqdata.description, trid], 
    (err, res)=>{
        if(err){
            console.log('Error while updating a record');
            result(null, err);
        }else{
            console.log('Record updated successfully');
            result(null, res);
        }
    })
}

//delete a record
transactinfoRecords.deleteRecord = (trid, result) =>{
    dbConn.query('DELETE FROM transactinfo WHERE trid=?', [trid], (err, res)=>{
        if(err){
            console.log('Error while deleting a record');
            result(null, err);
        }else{
            console.log('Record deleted successfully');
            result(null, res);
        }
    })
}

module.exports = transactinfoRecords;