const model = require('../models/records.model');

//get all records
exports.getAllRecords = (req, res) => {
    model.getAllRecords((err, records) => {
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

//create new record
exports.postRecord = (req, res) => {
    const input = new model(req.body);
    console.log('input : ', input);

    model.postRecord(input, (err, records) => {
        console.log('We are here');
        if (err)
            res.send(err);
        else
            res.json({ recid: records.insertId, message: 'Record created successfully' })
    })
}

//patch record by id
exports.putRecord = (req, res) => {
    const input = new model(req.body);
    console.log('input : ', input);

    model.putRecord(req.params.id, input, (err, records) => {
        if (err)
            res.send(err);
        res.json({ message: records.changedRows + ' ' + 'Record(s) updated' })
    })
}

//delete record by id
exports.deleteRecord = (req, res) => {
    model.deleteRecord(req.params.id, (err, records) => {
        if (err)
            res.send(err);
        res.json({ message: records.affectedRows + ' ' + 'Record(s) deleted' });
    })
}