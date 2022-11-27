const mongodb = require('mongodb');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const { DATABASE_URI } = process.env;

if (!DATABASE_URI) {
    console.error("No ATLAS_URI environment variable has been defined in config.env");
    process.exit(1);
}

async function connectToMongo() {
    try {
        mongoose.connect(DATABASE_URI);
        console.log("Successfully connected to the server");

    } catch (e) {
        console.log(e.message);
    }
}

module.exports = {
    // collections,
    connectToMongo
}