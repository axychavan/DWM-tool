var dbConn = require('../config/db.config');

var emergencyinfoRecords = function(records){
    this.name = records.name;
    this.phone = records.phone;
}

//get all records
emergencyinfoRecords.getAllRecords = (result) =>{
    dbConn.query('SELECT * FROM emergencyinfo', (err, res)=>{
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
emergencyinfoRecords.getRecordByID = (emid, result) =>{
    dbConn.query('SELECT * FROM emergencyinfo WHERE emid=?', emid, (err, res)=>{
        if(err){
            console.log('Error while fetching a record by emid',err);
            result(null, err);
        }else{
            console.log('Record fetched successfully');
            result(null, res);
        }
    })
}

//create new record
emergencyinfoRecords.createRecord = (recordReqdata, result) =>{
    dbConn.query('INSERT INTO emergencyinfo SET ?', recordReqdata, (err, res)=>{
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
emergencyinfoRecords.updateRecord = (emid, recordReqdata, result) =>{
    dbConn.query("UPDATE emergencyinfo SET name=?, phone=? WHERE emid=?", [recordReqdata.name, recordReqdata.phone, emid], 
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
emergencyinfoRecords.deleteRecord = (emid, result) =>{
    dbConn.query('DELETE FROM emergencyinfo WHERE emid=?', [emid], (err, res)=>{
        if(err){
            console.log('Error while deleting a record');
            result(null, err);
        }else{
            console.log('Record deleted successfully');
            result(null, res);
        }
    })
}

module.exports = emergencyinfoRecords;