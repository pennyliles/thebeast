const mongodb = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();
const { DATABASE_URI } = process.env;

if (!DATABASE_URI) {
    console.error("No ATLAS_URI environment variable has been defined in config.env");
    process.exit(1);
}

const collections = {
    person_level: {},
    closed_cases: {},
    staffing_level: {},
    job_dev_log: {},
    ips_activity_log: {}
};

async function connectToMongo() {
    const client = new mongodb.MongoClient(DATABASE_URI);
    try {
        await client.connect();

        const db = await client.db("thebeasttest");
        console.log("Successfully connected to the server");

        /* Collect connections */
        collections.person_level = db.collection("person_level");
        collections.closed_cases = db.collection("closed_cases");
        collections.staffing_level = db.collection("staffing_level");
        collections.job_dev_log = db.collection("job_dev_log");
        collections.ips_activity_log = db.collection("ips_activity_log");

    } catch (e) {
        console.log(e.message);
    }
}

module.exports = {
    collections,
    connectToMongo
}