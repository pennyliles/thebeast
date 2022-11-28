const mongodb = require('mongodb');
const mongoose = require('mongoose');
const dbConfig = require("../api/db.config");

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.personLevel = require("../api/models/personLevelSchema")(mongoose);
db.closed = require("../api/models/closedSchema")(mongoose);
db.staffing = require("../api/models/staffingSchema")(mongoose);
db.jobDev = require("../api/models/jobDevSchema")(mongoose);
db.IPSLog = require("../api/models/IPSLogSchema")(mongoose);

module.exports = db;