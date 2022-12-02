const mongodb = require('mongodb');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const IPSLogServices = require('../services/IPSLogServices');
const IPSLogModel = require('../models/IPSLogSchema');

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
    await IPSLogModel.deleteMany();
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
    const IPSLogtest = new Object({ "staff_name": "name 1", "time_period": "TIME PERIOD STRING", "work_week": "WORK WEEK STRING", "hours_worked": 20, "team_hours_spent": 100, "community_hours_spent": 10, "train_PTO_hours_spent": 10 })
    await IPSLogServices.addRecordToDB(IPSLogtest).then(status => {
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
    const IPSLogtest = new Object({ "staff_name": "name 2", "work_week": "WORK WEEK STRING with time period missing", "hours_worked": 20, "team_hours_spent": 100, "community_hours_spent": 10, "train_PTO_hours_spent": 10 })
    await IPSLogServices.addRecordToDB(IPSLogtest).then(status => {
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
    const IPSLogtest = new Object({ "staff_name": "name 2", "time_period": "TIME PERIOD STRING", "work_week": "WORK WEEK STRING", "hours_worked": 20, "team_hours_spent": 100, "community_hours_spent": 10, "train_PTO_hours_spent": 10 })
    await IPSLogServices.updateRecordInDB("name 2", IPSLogtest).then(status => {
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
    const IPSLogtest1 = new Object({ "staff_name": "name 3", "time_period": "TIME PERIOD STRING", "work_week": "WORK WEEK STRING", "hours_worked": 20, "team_hours_spent": 100, "community_hours_spent": 10, "train_PTO_hours_spent": 10 })
    await IPSLogServices.addRecordToDB(IPSLogtest1)
    const IPSLogtest2 = new Object({ "staff_name": "name 4", "time_period": "TIME PERIOD STRING", "work_week": "WORK WEEK STRING", "hours_worked": 20, "team_hours_spent": 100, "community_hours_spent": 10, "train_PTO_hours_spent": 10 })
    await IPSLogServices.addRecordToDB(IPSLogtest2)
    const IPSLogtest3 = new Object({ "staff_name": "name 5", "time_period": "TIME PERIOD STRING", "work_week": "WORK WEEK STRING", "hours_worked": 20, "team_hours_spent": 100, "community_hours_spent": 10, "train_PTO_hours_spent": 10 })
    await IPSLogServices.addRecordToDB(IPSLogtest3)
    const IPSLogtest4 = new Object({ "staff_name": "name 6", "time_period": "TIME PERIOD STRING", "work_week": "WORK WEEK STRING", "hours_worked": 20, "team_hours_spent": 100, "community_hours_spent": 10, "train_PTO_hours_spent": 10 })
    await IPSLogServices.addRecordToDB(IPSLogtest4)
    const IPSLogtest5 = new Object({ "staff_name": "name 7", "time_period": "TIME PERIOD STRING", "work_week": "WORK WEEK STRING", "hours_worked": 20, "team_hours_spent": 100, "community_hours_spent": 10, "train_PTO_hours_spent": 10 })
    await IPSLogServices.addRecordToDB(IPSLogtest5)
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
    await IPSLogServices.getAllRecordsFromDB().then(status => {
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
    await IPSLogServices.getRecordFromDB("name 6").then(status => {
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
    await IPSLogServices.getRecordFromDB("name 8").then(status => {
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
    await IPSLogServices.deleteRecordFromDB("name 7").then(status => {
        expect(status).not.toBeNull();
    });
    mongoose.disconnect();
});