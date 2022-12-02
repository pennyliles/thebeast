const mongoose = require("mongoose");

// Create a schema
const staffingSchema = new mongoose.Schema({
    agency_name: String,
    eval_dates: [String],
    date_completed: String,
    staff_name: String,
    job_titles: String,
    other_roles: String,
    time_spent: Number,
    start_date: String,
    end_date: String,
    hours_worked: Number,
    IPS_training: [String]
});

// Create a model
const staffingModel = mongoose.model('staffing_level', staffingSchema);

// Export the model
module.exports = staffingModel;