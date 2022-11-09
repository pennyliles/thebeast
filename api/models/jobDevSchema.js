const mongoose = require("mongoose");

const jobDevSchema = new mongoose.Schema({
    date_participated: [Date],
    uid: Number,
    employment_goal: String,
    employer_contacted: String,
    employer_hiring: Boolean,
    contact_method: String,
    date_of_contact: Date,
    nature_of_visit: String,
    visit_desc: String
});

// Create a model
const jobDevModel = mongoose.model('job_dev_log', jobDevSchema);

// Export the model
module.exports = jobDevModel;