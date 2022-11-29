const mongoose = require("mongoose");

// Create a schema
const jobDevSchema = new mongoose.Schema({
    date_participated: [String],
    uid: String,
    employment_goal: String,
    employer_contacted: String,
    employer_hiring: String,
    contact_method: String,
    date_of_contact: String,
    nature_of_visit: String,
    visit_desc: String
});

// Create a model
const jobDevModel = mongoose.model('job_dev_log', jobDevSchema);

// Export the model
module.exports = jobDevModel;