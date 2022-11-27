const mongodb = require('mongodb');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const personLevelServices = require('../services/personLevelServices');
const personLevelModel = require('../models/personLevelSchema');

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
    await personLevelModel.deleteMany();
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
    const personLeveltest = new Object({ "uid": "name 1", "phase_of_service": "PHASE OF SERVICE STRING", "first_date": "FIRST DATE STRING", "ipe_with_vr": true, "vr_id": 1, "county_id": 1, "current_clinical_services": ["SERVICE 1", "SERVICE 2"], "clinical_services_agency": "CLINICAL SERVICES AGENCY STRING" })
    await personLevelServices.addRecordToDB(personLeveltest).then(status => {
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
    const personLeveltest = new Object({ "uid": "name 2", "phase_of_service": "PHASE OF SERVICE STRING", "first_date": "FIRST DATE STRING", "ipe_with_vr": true, "vr_id": 2, "county_id": 2, "current_clinical_services": ["SERVICE 1", "SERVICE 2", "MISSING CLINICAL SERVICES AGENCY"] })
    await personLevelServices.addRecordToDB(personLeveltest).then(status => {
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
    const personLeveltest = new Object({ "uid": "name 2", "phase_of_service": "PHASE OF SERVICE STRING", "first_date": "FIRST DATE STRING", "ipe_with_vr": true, "vr_id": 2, "county_id": 2, "current_clinical_services": ["SERVICE 1", "SERVICE 2", "CLINICAL SERVICES AGENCY NOT MISSING"], "clinical_services_agency": "CLINICAL SERVICES AGENCY STRING" })
    await personLevelServices.updateRecordInDB("name 2", personLeveltest).then(status => {
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
    const personLeveltest1 = new Object({ "uid": "name 3", "phase_of_service": "PHASE OF SERVICE STRING", "first_date": "FIRST DATE STRING", "ipe_with_vr": true, "vr_id": 3, "county_id": 3, "current_clinical_services": ["SERVICE 1", "SERVICE 2"], "clinical_services_agency": "CLINICAL SERVICES AGENCY STRING" })
    await personLevelServices.addRecordToDB(personLeveltest1)
    const personLeveltest2 = new Object({ "uid": "name 4", "phase_of_service": "PHASE OF SERVICE STRING", "first_date": "FIRST DATE STRING", "ipe_with_vr": true, "vr_id": 4, "county_id": 4, "current_clinical_services": ["SERVICE 1", "SERVICE 2"], "clinical_services_agency": "CLINICAL SERVICES AGENCY STRING" })
    await personLevelServices.addRecordToDB(personLeveltest2)
    const personLeveltest3 = new Object({ "uid": "name 5", "phase_of_service": "PHASE OF SERVICE STRING", "first_date": "FIRST DATE STRING", "ipe_with_vr": true, "vr_id": 5, "county_id": 5, "current_clinical_services": ["SERVICE 1", "SERVICE 2"], "clinical_services_agency": "CLINICAL SERVICES AGENCY STRING" })
    await personLevelServices.addRecordToDB(personLeveltest3)
    const personLeveltest4 = new Object({ "uid": "name 6", "phase_of_service": "PHASE OF SERVICE STRING", "first_date": "FIRST DATE STRING", "ipe_with_vr": true, "vr_id": 6, "county_id": 6, "current_clinical_services": ["SERVICE 1", "SERVICE 2"], "clinical_services_agency": "CLINICAL SERVICES AGENCY STRING" })
    await personLevelServices.addRecordToDB(personLeveltest4)
    const personLeveltest5 = new Object({ "uid": "name 7", "phase_of_service": "PHASE OF SERVICE STRING", "first_date": "FIRST DATE STRING", "ipe_with_vr": true, "vr_id": 7, "county_id": 7, "current_clinical_services": ["SERVICE 1", "SERVICE 2"], "clinical_services_agency": "CLINICAL SERVICES AGENCY STRING" })
    await personLevelServices.addRecordToDB(personLeveltest5)
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
    await personLevelServices.getAllRecordsFromDB().then(status => {
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
    await personLevelServices.getRecordFromDB("name 6").then(status => {
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
    await personLevelServices.getRecordFromDB("name 8").then(status => {
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
    await personLevelServices.deleteRecordFromDB("name 7").then(status => {
        expect(status).not.toBeNull();
    });
    mongoose.disconnect();
});