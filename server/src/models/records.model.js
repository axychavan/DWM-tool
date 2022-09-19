var dbConn = require('../config/db.config');

var Records = function(records){
    this.date = records.date;
    this.userid = records.userid;
    this.clientid = records.clientid;
    this.taskid = records.taskid;
    this.description = records.description;
    this.duration = records.duration;
}

//get all records
Records.getAllRecords = (result) =>{
    dbConn.query('SELECT * FROM transact', (err, res)=>{
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
Records.getRecordByID = (id, result) =>{
    dbConn.query('SELECT * FROM records WHERE id=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching a record by id',err);
            result(null, err);
        }else{
            console.log('Record fetched successfully');
            result(null, res);
        }
    })
}

//create new record
Records.createRecord = (recordReqdata, result) =>{
    dbConn.query('INSERT INTO records SET ?', recordReqdata, (err, res)=>{
        if(err){
            console.log('Error while inserting a record');
            result(null, err);
        }else{
            console.log('Record created successfully');
            result(null, res);
        }
    })
}

//update a record
Records.updateRecord = (id, recordReqdata, result) =>{
    dbConn.query("UPDATE records SET date=?, project=?, task=?, duration=?, description=? WHERE id=?", [recordReqdata.date, recordReqdata.project, recordReqdata.task, recordReqdata.duration, recordReqdata.description, id], 
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
Records.deleteRecord = (id, result) =>{
    dbConn.query('DELETE FROM records WHERE id=?', [id], (err, res)=>{
        if(err){
            console.log('Error while deleting a record');
            result(null, err);
        }else{
            console.log('Record deleted successfully');
            result(null, res);
        }
    })
}

module.exports = Records;