const personLevelModel = require('../models/personLevelSchema');

async function getAllRecordsFromDB() {
    var records = await personLevelModel.find(function (err, docs) {
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
    var record = await personLevelModel.findOne({ uid: id }, function (err, doc) {
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
    var record = new personLevelModel(body);
    var status = await personLevelModel.findOne(body, function (err, doc) {
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
    var status = await personLevelModel.findOneAndUpdate({ uid: id }, body, function (err, doc) {
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
    var status = await personLevelModel.findOne({ uid: id });

    await personLevelModel.findOneAndDelete({ uid: id }, function (err, doc) {
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

module.exports = {
    getAllRecordsFromDB,
    getRecordFromDB,
    addRecordToDB,
    updateRecordInDB,
    deleteRecordFromDB
};