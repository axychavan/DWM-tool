var dbConn = require('../config/db.config');

var clientinfoRecords = function(records){
    this.name = records.name;
    this.location = records.location;
}

//get all records
clientinfoRecords.getAllRecords = (result) =>{
    dbConn.query('SELECT * FROM clientinfo', (err, res)=>{
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
clientinfoRecords.getRecordByID = (clientid, result) =>{
    dbConn.query('SELECT * FROM clientinfo WHERE clientid=?', clientid, (err, res)=>{
        if(err){
            console.log('Error while fetching a record by clientid',err);
            result(null, err);
        }else{
            console.log('Record fetched successfully');
            result(null, res);
        }
    })
}

//create new record
clientinfoRecords.createRecord = (recordReqdata, result) =>{
    dbConn.query('INSERT INTO clientinfo SET ?', recordReqdata, (err, res)=>{
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
clientinfoRecords.updateRecord = (clientid, recordReqdata, result) =>{
    dbConn.query("UPDATE clientinfo SET name=?, location=? WHERE clientid=?", [recordReqdata.name, recordReqdata.location, clientid], 
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
clientinfoRecords.deleteRecord = (clientid, result) =>{
    dbConn.query('DELETE FROM clientinfo WHERE clientid=?', [clientid], (err, res)=>{
        if(err){
            console.log('Error while deleting a record');
            result(null, err);
        }else{
            console.log('Record deleted successfully');
            result(null, res);
        }
    })
}

module.exports = clientinfoRecords;