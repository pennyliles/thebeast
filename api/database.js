const mongoose = require('mongoose');
const dbConfig = require("../api/db.config");

mongoose.Promise = global.Promise;

/* 
Creating a db instance and connecting to MongoDB through mongoose.
Adding the MongoDB database URI and initializing the survey collections
*/

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.personLevel = require("../api/models/personLevelSchema")(mongoose);
db.closed = require("../api/models/closedSchema")(mongoose);
db.staffing = require("../api/models/staffingSchema")(mongoose);
db.jobDev = require("../api/models/jobDevSchema")(mongoose);
db.IPSLog = require("../api/models/IPSLogSchema")(mongoose);

module.exports = db;