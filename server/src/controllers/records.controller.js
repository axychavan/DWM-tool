const recordController = require('../models/records.model');

//get all records
exports.getAllRecords = (req, res) => {
    recordController.getAllRecords((err, records) => {
        console.log('We are here');
        if (err)
            res.send(err);
        
        // sorting date in ascending order
        records.sort(function (a, b) {
            var c = new Date(a.date);
            var d = new Date(b.date);
            return c - d;
        });

        console.log('Array', records);
        res.send(records)
    })
}

//get record by id
exports.getRecordById = (req, res) => {
    //console.log('getting record by id');
    recordController.getRecordById(req.params.recid, (err, record) => {
        if (err)
            res.send(err);
        console.log('Single record', record);
        res.send(record);
    })
}

//create new record
exports.postNewRecord = (req, res) => {
    const user_input = new recordController(req.body);
    console.log('user_input : ', user_input);

    recordController.postNewRecord(user_input, (err, records) => {
        if (err)
            res.send(err);
        res.json({ recordid: records.insertId, message: 'Record created successfully' })
    })
}

//update record by id
exports.putRecordById = (req, res) => {
    const user_input = new recordController(req.body);
    console.log('user_input : ', user_input);

    recordController.putRecordById(req.params.id, user_input, (err, records) => {
        if (err)
            res.send(err);
        res.json({ message: 'Record updated successfully' })
    })
}

//delete record by id
exports.deleteRecord = (req, res) => {
    recordController.deleteRecord(req.params.id, (err, records) => {
        if (err)
            res.send(err);
        res.json({ message: 'Record deleted successfully' });
    })
}