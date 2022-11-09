const mongodb = require('mongodb');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const { DATABASE_URI } = process.env;

if (!DATABASE_URI) {
    console.error("No ATLAS_URI environment variable has been defined in config.env");
    process.exit(1);
}

// const collections = {
//     person_level: {
//         name: "person_level",
//         collection: {}
//     },
//     closed_cases: {
//         name: "closed_cases",
//         collection: {}
//     },
//     staffing_level: {
//         name: "staffing_level",
//         collection: {}
//     },
//     job_dev_log: {
//         name: "job_dev_log",
//         collection: {}
//     },
//     ips_activity_log: {
//         name: "ips_activity_log",
//         collection: {}
//     }
// };

async function connectToMongo() {
    // const client = new mongodb.MongoClient(DATABASE_URI);
    try {
        // await client.connect();

        // const db = await client.db("thebeasttest");
        mongoose.connect(DATABASE_URI);
        console.log("Successfully connected to the server");

        /* Collect connections */
        // collections.person_level.collection = db.collection("person_level");
        // collections.closed_cases.collection = db.collection("closed_cases");
        // collections.staffing_level.collection = db.collection("staffing_level");
        // collections.job_dev_log.collection = db.collection("job_dev_log");
        // collections.ips_activity_log.collection = db.collection("ips_activity_log");

    } catch (e) {
        console.log(e.message);
    }
}

module.exports = {
    // collections,
    connectToMongo
}