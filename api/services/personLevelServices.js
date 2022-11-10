const personLevelModel = require('../models/personLevelSchema');

async function getRecordFromDB(id) {
    var record = await personLevelModel.find({ uid: id });
    return record;
}

async function addRecordToDB(body) {
    var record = new personLevelModel(body);
    var status = await personLevelModel.find(body);

    if (!status.length) {
        record.save();
        return false;
    } else {
        return true;
    }
}

async function deleteRecordFromDB(id) {
    var status = await personLevelModel.findOneAndDelete({ uid: id });

    if (!status.length) {
        return true;
    } else {
        return false;
    }
}

module.exports = {
    getRecordFromDB,
    addRecordToDB,
    deleteRecordFromDB
};