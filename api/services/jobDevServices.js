const jobDevModel = require('../models/jobDevSchema');

async function getAllRecordsFromDB() {
    var records = await jobDevModel.find(function (err, docs) {
        if (err) {
            throw err;
        } else {
            if (docs) {
                console.log('Found all records.');
            } else {
                console.log('No records found.')
            }
        }
    }).clone();

    return records;
}

async function getRecordFromDB(id) {
    var record = await jobDevModel.findOne({ uid: id }, function (err, doc) {
        if (err) {
            throw err;
        } else {
            if (doc) {
                console.log('Found ' + doc);
            } else {
                console.log('Could not find record with uid: ' + id);
            }
        }
    }).clone();

    return record;
}

async function addRecordToDB(body) {
    var record = new jobDevModel(body);
    var status = await jobDevModel.findOne(body, function (err, doc) {
        if (err) {
            throw err;
        } else {
            if (doc) {
                console.log('Record already exists.');
            } else {
                record.save(function (err, doc) {
                    if (err) {
                        throw err;
                    } else {
                        console.log('Added ' + doc);
                    }
                });
            }
        }
    }).clone();

    return status;
}

async function updateRecordInDB(id, body) {
    var status = await jobDevModel.findOneAndUpdate({ uid: id }, body, function (err, doc) {
        if (err) {
            throw err;
        } else {
            if (doc) {
                console.log('Sucessfully updated the record to: ' + doc);
            } else {
                console.log('No record found to update.');
            }
        }
    }).clone();

    return status;
}

async function deleteRecordFromDB(id) {
    var status = await jobDevModel.findOne({ uid: id });

    await jobDevModel.findOneAndDelete({ uid: id }, function (err, doc) {
        if (err) {
            throw err;
        } else {
            if (doc) {
                console.log('Sucessfully deleted record :' + doc);
            } else {
                console.log('No record found to delete.');
            }
        }
    }).clone();

    return status;
}

async function deleteAllRecordsFromDB() {
    var records = await jobDevModel.deleteMany({}, function (err, docs) {
        if (err) {
            throw err;
        } else {
            if (docs) {
                console.log('Deleted all records.');
            } else {
                console.log('No records found.')
            }
        }
    }).clone();

    return records;
}

module.exports = {
    getAllRecordsFromDB,
    getRecordFromDB,
    addRecordToDB,
    updateRecordInDB,
    deleteRecordFromDB,
    deleteAllRecordsFromDB
};