const transactinfoModel = require('../models/transactinfo.model');

//get all records
exports.getRecords = (req, res) => {
    //console.log('List of all the records');
    transactinfoModel.getAllRecords((err, records) => {
        console.log('We are here');
        if (err)
            res.send(err);

        // sorting date in ascending order
        records.sort(function (a, b) {
            var c = new Date(a.date);
            var d = new Date(b.date);
            return c - d;
        });

        console.log('Records', records);
        res.send(records)
    })
}

//get record by id
exports.getRecordByID = (req, res) => {
    //console.log('getting record by id');
    transactinfoModel.getRecordByID(req.params.trid, (err, record) => {
        if (err)
            res.send(err);
        console.log('Single record', record);
        res.send(record);
    })
}

//create a new record
exports.createNewRecord = (req, res) => {
    const recordReqdata = new transactinfoModel(req.body);
    console.log('recordReqdata', recordReqdata);
    //check null
    if (req.body.constructor === Object && Object.keys(req).length === 0) {
        res.send(400).send({ success: false, message: 'Please fill all fields' });
    } else {
        console.log('valid data');
        transactinfoModel.createRecord(recordReqdata, (err, records) => {
            if (err)
                res.send(err);
            res.json({ status: true, message: 'Record created successfully', data: records.insertId })
        })
    }
}

//update a record
exports.updateRecord = (req, res) => {
    const recordReqdata = new transactinfoModel(req.body);
    console.log('recordReqdata update', recordReqdata);
    //check null
    if (req.body.constructor === Object && Object.keys(req).length === 0) {
        res.send(400).send({ success: false, message: 'Please fill all fields' });
    } else {
        console.log('valid data');
        transactinfoModel.updateRecord(req.params.id, recordReqdata, (err, records) => {
            if (err)
                res.send(err);
            res.json({ status: true, message: 'Record updated successfully' })
        })
    }
}

//delete a record
exports.deleteRecord = (req, res) => {
    transactinfoModel.deleteRecord(req.params.id, (err, records) => {
        if (err)
            res.send(err);
        res.json({ success: true, message: 'Record deleted successfully' });
    })
}