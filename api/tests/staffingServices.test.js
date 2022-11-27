const mongodb = require('mongodb');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const staffingServices = require('../services/staffingServices');
const staffingModel = require('../models/staffingSchema');

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
    await staffingModel.deleteMany();
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
    const staffingtest = new Object({ "agency_name": "AGENCY NAME STRING", "eval_dates": ["EVAL STRING 1", "EVAL STRING 2"], "date_completed": "DATE COMPLETED STRING", "staff_name": "name 1", "job_titles": "JOB TITLES STRING", "other_roles": "OTHER ROLES STRING", "time_spent": 1, "start_date": "START DATE STRING", "end_date": "END DATE STRING", "hours_worked": 20, "IPS_training": ["IPS TRAINING STRING 1", "IPS TRAINING STRING 2"] })
    await staffingServices.addRecordToDB(staffingtest).then(status => {
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
    const staffingtest = new Object({ "eval_dates": ["EVAL STRING 1 WITH MISSING AGENCY NAME", "EVAL STRING 2"], "date_completed": "DATE COMPLETED STRING", "staff_name": "name 2", "job_titles": "JOB TITLES STRING", "other_roles": "OTHER ROLES STRING", "time_spent": 1, "start_date": "START DATE STRING", "end_date": "END DATE STRING", "hours_worked": 20, "IPS_training": ["IPS TRAINING STRING 1", "IPS TRAINING STRING 2"] })
    await staffingServices.addRecordToDB(staffingtest).then(status => {
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
    const staffingtest = new Object({ "agency_name": "AGENCY NAME STRING", "eval_dates": ["EVAL STRING 1 WITH PRESENT AGENCY NAME", "EVAL STRING 2"], "date_completed": "DATE COMPLETED STRING", "staff_name": "name 2", "job_titles": "JOB TITLES STRING", "other_roles": "OTHER ROLES STRING", "time_spent": 1, "start_date": "START DATE STRING", "end_date": "END DATE STRING", "hours_worked": 20, "IPS_training": ["IPS TRAINING STRING 1", "IPS TRAINING STRING 2"] })
    await staffingServices.updateRecordInDB("name 2", staffingtest).then(status => {
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
    const staffingtest1 = new Object({ "agency_name": "AGENCY NAME STRING", "eval_dates": ["EVAL STRING 1", "EVAL STRING 2"], "date_completed": "DATE COMPLETED STRING", "staff_name": "name 3", "job_titles": "JOB TITLES STRING", "other_roles": "OTHER ROLES STRING", "time_spent": 1, "start_date": "START DATE STRING", "end_date": "END DATE STRING", "hours_worked": 20, "IPS_training": ["IPS TRAINING STRING 1", "IPS TRAINING STRING 2"] })
    await staffingServices.addRecordToDB(staffingtest1)
    const staffingtest2 = new Object({ "agency_name": "AGENCY NAME STRING", "eval_dates": ["EVAL STRING 1", "EVAL STRING 2"], "date_completed": "DATE COMPLETED STRING", "staff_name": "name 4", "job_titles": "JOB TITLES STRING", "other_roles": "OTHER ROLES STRING", "time_spent": 1, "start_date": "START DATE STRING", "end_date": "END DATE STRING", "hours_worked": 20, "IPS_training": ["IPS TRAINING STRING 1", "IPS TRAINING STRING 2"] })
    await staffingServices.addRecordToDB(staffingtest2)
    const staffingtest3 = new Object({ "agency_name": "AGENCY NAME STRING", "eval_dates": ["EVAL STRING 1", "EVAL STRING 2"], "date_completed": "DATE COMPLETED STRING", "staff_name": "name 5", "job_titles": "JOB TITLES STRING", "other_roles": "OTHER ROLES STRING", "time_spent": 1, "start_date": "START DATE STRING", "end_date": "END DATE STRING", "hours_worked": 20, "IPS_training": ["IPS TRAINING STRING 1", "IPS TRAINING STRING 2"] })
    await staffingServices.addRecordToDB(staffingtest3)
    const staffingtest4 = new Object({ "agency_name": "AGENCY NAME STRING", "eval_dates": ["EVAL STRING 1", "EVAL STRING 2"], "date_completed": "DATE COMPLETED STRING", "staff_name": "name 6", "job_titles": "JOB TITLES STRING", "other_roles": "OTHER ROLES STRING", "time_spent": 1, "start_date": "START DATE STRING", "end_date": "END DATE STRING", "hours_worked": 20, "IPS_training": ["IPS TRAINING STRING 1", "IPS TRAINING STRING 2"] })
    await staffingServices.addRecordToDB(staffingtest4)
    const staffingtest5 = new Object({ "agency_name": "AGENCY NAME STRING", "eval_dates": ["EVAL STRING 1", "EVAL STRING 2"], "date_completed": "DATE COMPLETED STRING", "staff_name": "name 7", "job_titles": "JOB TITLES STRING", "other_roles": "OTHER ROLES STRING", "time_spent": 1, "start_date": "START DATE STRING", "end_date": "END DATE STRING", "hours_worked": 20, "IPS_training": ["IPS TRAINING STRING 1", "IPS TRAINING STRING 2"] })
    await staffingServices.addRecordToDB(staffingtest5)
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
    await staffingServices.getAllRecordsFromDB().then(status => {
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
    await staffingServices.getRecordFromDB("name 6").then(status => {
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
    await staffingServices.getRecordFromDB("name 8").then(status => {
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
    await staffingServices.deleteRecordFromDB("name 7").then(status => {
        expect(status).not.toBeNull();
    });
    mongoose.disconnect();
});