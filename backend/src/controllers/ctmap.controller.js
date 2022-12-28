const ctmapController = require('../models/ctmap.model');

//get all ctmaps
exports.getAllCtmaps = (req, res) => {
    ctmapController.getAllCtmaps((err, records) => {
        console.log('We are here');
        if (err)
            res.send(err);
        console.log('Array', records);
        res.send(records)
    })
}

//get ctmap by id
exports.getCtmapById = (req, res) => {
    //console.log('getting record by id');
    ctmapController.getCtmapById(req.params.mapid, (err, record) => {
        if (err)
            res.send(err);
        console.log('Single record', record);
        res.send(record);
    })
}

//create new ctmap
exports.postNewCtmap = (req, res) => {
    const user_input = new ctmapController(req.body);
    console.log('user_input : ', user_input);

    ctmapController.postNewCtmap(user_input, (err, records) => {
        if (err)
            res.send(err);
        res.json({ ctmapid: records.insertId, message: 'Ctmap created successfully' })
    })
}

//update ctmap by id
exports.putCtmapById = (req, res) => {
    const user_input = new ctmapController(req.body);
    console.log('user_input : ', user_input);

    ctmapController.putCtmapById(req.params.id, user_input, (err, records) => {
        if (err)
            res.send(err);
        res.json({ message: 'Ctmap updated successfully' })
    })
}

//delete ctmap by id
exports.deleteCtmap = (req, res) => {
    ctmapController.deleteCtmap(req.params.id, (err, records) => {
        if (err)
            res.send(err);
        res.json({ message: 'Ctmap deleted successfully' });
    })
}