const mongoose = require("mongoose");

const staffingSchema = new mongoose.Schema({
    agency_name: String,
    eval_dates: [Date],
    date_completed: Date,
    staff: String,
    job_titles: String,
    other_roles: String,
    time_spent: Number,
    start_date: Date,
    end_data: Date,
    hours_worked: Number,
    IPS_training: [String]
});

// Create a model
const staffingModel = mongoose.model('staffing_level', staffingSchema);

// Export the model
module.exports = staffingModel;