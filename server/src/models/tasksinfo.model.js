var dbConn = require('../config/db.config');

var tasksRecords = function(records){
    this.description = records.description;
}

//get all records
tasksRecords.getAllRecords = (result) =>{
    dbConn.query('SELECT * FROM tasksinfo', (err, res)=>{
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
tasksRecords.getRecordByID = (taskid, result) =>{
    dbConn.query('SELECT * FROM tasksinfo WHERE taskid=?', taskid, (err, res)=>{
        if(err){
            console.log('Error while fetching a record by taskid',err);
            result(null, err);
        }else{
            console.log('Record fetched successfully');
            result(null, res);
        }
    })
}

//create new record
tasksRecords.createRecord = (recordReqdata, result) =>{
    dbConn.query('INSERT INTO tasksinfo SET ?', recordReqdata, (err, res)=>{
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
tasksRecords.updateRecord = (taskid, recordReqdata, result) =>{
    dbConn.query("UPDATE tasksinfo SET description=? WHERE taskid=?", [recordReqdata.description, taskid], 
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
tasksRecords.deleteRecord = (taskid, result) =>{
    dbConn.query('DELETE FROM tasksinfo WHERE taskid=?', [taskid], (err, res)=>{
        if(err){
            console.log('Error while deleting a record');
            result(null, err);
        }else{
            console.log('Record deleted successfully');
            result(null, res);
        }
    })
}

module.exports = tasksRecords;