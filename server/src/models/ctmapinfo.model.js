var dbConn = require('../config/db.config');

var ctmapinfoRecords = function(records){
    this.clientid = records.clientid;
    this.taskid = records.taskid;
}

//get all records
ctmapinfoRecords.getAllRecords = (result) =>{
    dbConn.query('SELECT * FROM ctmapinfo', (err, res)=>{
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
ctmapinfoRecords.getRecordByID = (mapid, result) =>{
    dbConn.query('SELECT * FROM ctmapinfo WHERE mapid=?', mapid, (err, res)=>{
        if(err){
            console.log('Error while fetching a record by mapid',err);
            result(null, err);
        }else{
            console.log('Record fetched successfully');
            result(null, res);
        }
    })
}

//create new record
ctmapinfoRecords.createRecord = (recordReqdata, result) =>{
    dbConn.query('INSERT INTO ctmapinfo SET ?', recordReqdata, (err, res)=>{
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
ctmapinfoRecords.updateRecord = (mapid, recordReqdata, result) =>{
    dbConn.query("UPDATE ctmapinfo SET clientid=?, taskid=? WHERE mapid=?", [recordReqdata.clientid, recordReqdata.taskid, mapid], 
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
ctmapinfoRecords.deleteRecord = (mapid, result) =>{
    dbConn.query('DELETE FROM ctmapinfo WHERE mapid=?', [mapid], (err, res)=>{
        if(err){
            console.log('Error while deleting a record');
            result(null, err);
        }else{
            console.log('Record deleted successfully');
            result(null, res);
        }
    })
}

module.exports = ctmapinfoRecords;