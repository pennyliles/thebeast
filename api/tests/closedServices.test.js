const mongoose = require('mongoose');
const dotenv = require('dotenv');
const closedServices = require('../services/closedServices');
const closedModel = require('../models/closedSchema');

dotenv.config();
const { DATABASE_URI } = process.env;

/*test('test template', async () => {0
    try {
        await mongoose.connect(DATABASE_URI);
        console.log("Successfully connected to the server");
    } catch (e) {
        console.log(e.message);
    }

    mongoose.disconnect();
});*/

test('clear database', async () => {
    try {
        await mongoose.connect(DATABASE_URI);
        console.log("Successfully connected to the server");
    } catch (e) {
        console.log(e.message);
    }
    console.log("clearing database");
    await closedModel.deleteMany();
    mongoose.disconnect();
});

test('add record', async () => {
    try {
        await mongoose.connect(DATABASE_URI);
        console.log("Successfully connected to the server");
    } catch (e) {
        console.log(e.message);
    }
    console.log("add record test");
    const closedtest = new Object({ "uid": 1, "ESP": "ESP STRING", "closure_date": "DATE STRING", "employment_status": "EMPLOYMENT STRING", "engagement_activities": ["ENG 1", "ENG 2"], "closure_reason": ["REASON 1", "REASON 2"] })
    await closedServices.addRecordToDB(closedtest).then(status => {
        expect(status).not.toBeNull();
    });
    mongoose.disconnect();
});

test('add unformatted record', async () => {
    try {
        await mongoose.connect(DATABASE_URI);
        console.log("Successfully connected to the server");
    } catch (e) {
        console.log(e.message);
    }
    console.log("add unformatted record test");
    const closedtest = new Object({ "uid": 2, "bad field": "bad data", "closure_date": "DATE STRING with no bad field behind it", "employment_status": "EMPLOYMENT STRING", "engagement_activities": ["ENG 1", "ENG 2"], "closure_reason": ["REASON 1", "REASON 2"] })
    await closedServices.addRecordToDB(closedtest).then(status => {
        expect(status).not.toBeNull();
    });
    mongoose.disconnect();
});

test('update record', async () => {
    try {
        await mongoose.connect(DATABASE_URI);
        console.log("Successfully connected to the server");
    } catch (e) {
        console.log(e.message);
    }
    console.log("update record test");
    const closedtest = new Object({ "uid": 2, "ESP": "ESP STRING", "closure_date": "DATE STRING with no bad date in ESP behind it", "employment_status": "EMPLOYMENT STRING", "engagement_activities": ["ENG 1", "ENG 2"], "closure_reason": ["REASON 1", "REASON 2"] })
    await closedServices.updateRecordInDB(2, closedtest).then(status => {
        expect(status).not.toBeNull();
    });
    mongoose.disconnect();
});

test('add multiple records', async () => {
    try {
        await mongoose.connect(DATABASE_URI);
        console.log("Successfully connected to the server");
    } catch (e) {
        console.log(e.message);
    }
    console.log("add multiple records test");
    const closedtest1 = new Object({ "uid": 3, "ESP": "ESP STRING", "closure_date": "DATE STRING", "employment_status": "EMPLOYMENT STRING", "engagement_activities": ["ENG 1", "ENG 2"], "closure_reason": ["REASON 1", "REASON 2"] })
    await closedServices.addRecordToDB(closedtest1)
    const closedtest2 = new Object({ "uid": 4, "ESP": "ESP STRING", "closure_date": "DATE STRING", "employment_status": "EMPLOYMENT STRING", "engagement_activities": ["ENG 1", "ENG 2"], "closure_reason": ["REASON 1", "REASON 2"] })
    await closedServices.addRecordToDB(closedtest2)
    const closedtest3 = new Object({ "uid": 5, "ESP": "ESP STRING", "closure_date": "DATE STRING", "employment_status": "EMPLOYMENT STRING", "engagement_activities": ["ENG 1", "ENG 2"], "closure_reason": ["REASON 1", "REASON 2"] })
    await closedServices.addRecordToDB(closedtest3)
    const closedtest4 = new Object({ "uid": 6, "ESP": "ESP STRING", "closure_date": "DATE STRING", "employment_status": "EMPLOYMENT STRING", "engagement_activities": ["ENG 1", "ENG 2"], "closure_reason": ["REASON 1", "REASON 2"] })
    await closedServices.addRecordToDB(closedtest4)
    const closedtest5 = new Object({ "uid": 7, "ESP": "ESP STRING", "closure_date": "DATE STRING", "employment_status": "EMPLOYMENT STRING", "engagement_activities": ["ENG 1", "ENG 2"], "closure_reason": ["REASON 1", "REASON 2"] })
    await closedServices.addRecordToDB(closedtest5)
    mongoose.disconnect();
});

test('retrieve all records', async () => {
    try {
        await mongoose.connect(DATABASE_URI);
        console.log("Successfully connected to the server");
    } catch (e) {
        console.log(e.message);
    }
    console.log("view all records");
    await closedServices.getAllRecordsFromDB().then(status => {
        expect(status).not.toBeNull();
    });
    mongoose.disconnect();
});

test('retrieve 1 record', async () => {
    try {
        await mongoose.connect(DATABASE_URI);
        console.log("Successfully connected to the server");
    } catch (e) {
        console.log(e.message);
    }
    console.log("view record 6");
    await closedServices.getRecordFromDB(6).then(status => {
        expect(status).not.toBeNull();
    });
    mongoose.disconnect();
});

test('retrieve non-existant record', async () => {
    try {
        await mongoose.connect(DATABASE_URI);
        console.log("Successfully connected to the server");
    } catch (e) {
        console.log(e.message);
    }
    console.log("view non-existant record");
    await closedServices.getRecordFromDB(8).then(status => {
        expect(status).toBeNull();
    });
    mongoose.disconnect();
});

test('delete a record', async () => {
    try {
        await mongoose.connect(DATABASE_URI);
        console.log("Successfully connected to the server");
    } catch (e) {
        console.log(e.message);
    }
    console.log("delete record 7");
    await closedServices.deleteRecordFromDB(7).then(status => {
        expect(status).not.toBeNull();
    });
    mongoose.disconnect();
});