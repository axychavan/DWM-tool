const ctmapModel = require('../models/ctmapinfo.model');

//get all records
exports.getRecords = (req, res)=>{
    //console.log('List of all the records');
    ctmapModel.getAllRecords((err, records)=>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Records', records);
        res.send(records)
    })
}

//get record by id
exports.getRecordByID = (req, res)=>{
    //console.log('getting record by id');
    ctmapModel.getRecordByID(req.params.mapid, (err, record)=>{
        if(err)
        res.send(err);
        console.log('Single record', record);
        res.send(record);
    })
}

//create a new record
exports.createNewRecord = (req, res)=>{ 
    const recordReqdata = new ctmapModel(req.body);
    console.log('recordReqdata', recordReqdata);
    //check null
    if(req.body.constructor === Object && Object.keys(req).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        console.log('valid data');
        ctmapModel.createRecord(recordReqdata, (err, records)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Record created successfully', data: records.insertId})
        })
    }
}

//update a record
exports.updateRecord = (req, res)=>{
    const recordReqdata = new ctmapModel(req.body);
    console.log('recordReqdata update', recordReqdata);
    //check null
    if(req.body.constructor === Object && Object.keys(req).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        console.log('valid data');
        ctmapModel.updateRecord(req.params.id, recordReqdata, (err, records)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Record updated successfully'})
        })
    }
}

//delete a record
exports.deleteRecord = (req, res)=>{
    ctmapModel.deleteRecord(req.params.id, (err, records)=>{
        if(err)
        res.send(err);
        res.json({success: true, message: 'Record deleted successfully'});
    })
}