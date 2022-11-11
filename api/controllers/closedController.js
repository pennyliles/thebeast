const closedServices = require('../services/closedServices');

async function getAllRecords(req, res) {
    try {
        var result = await closedServices.getAllRecordsFromDB();
        if (result) {
            res.status(200).jsonp(result);
        } else {
            res.status(200).json({ success: true, msg: 'No records found.' })
        }
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ success: false, msg: 'Failed to retrieve records.' });
    }
}

async function getRecord(req, res) {
    var id = req.params.id;
    try {
        var result = await closedServices.getRecordFromDB(id);
        if (result) {
            res.status(200).jsonp(result);
        } else {
            res.status(200).json({ success: true, msg: 'Record not found.' })
        }
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ success: false, msg: 'Failed to retrieve record.' });
    }
}

async function addRecord(req, res) {
    var body = req.body;
    try {
        var status = await closedServices.addRecordToDB(body);
        if (status) {
            res.status(200).json({ success: true, msg: 'Record already exists.' });
        } else {
            res.status(200).json({ success: true, msg: 'Record added.' });
        }
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ success: false, msg: 'Failed to add record.' });
    }
}

async function updateRecord(req, res) {
    var id = req.params.id;
    var body = req.body;

    try {
        var status = await closedServices.updateRecordInDB(id, body);
        if (status) {
            res.status(200).json({ success: true, msg: 'Successfully updated the record.' });
        } else {
            res.status(200).json({ success: true, msg: 'Record not found.' });
        }
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ success: false, msg: 'Failed to update record.' });
    }
}

async function deleteRecord(req, res) {
    var id = req.params.id;
    try {
        var status = await closedServices.deleteRecordFromDB(id);
        if (status) {
            res.status(200).json({ success: true, msg: 'Record deleted.' });
        } else {
            res.status(200).json({ success: true, msg: 'Record not found.' });
        }
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ success: false, msg: 'Failed to delete record.' });
    }
}


module.exports = {
    getAllRecords,
    getRecord,
    addRecord,
    updateRecord,
    deleteRecord
};