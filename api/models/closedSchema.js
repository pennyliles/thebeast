const mongoose = require("mongoose");

const closedSchema = new mongoose.Schema({
    uid: Number,
    ESP: String,
    closure_date: Date,
    employment_status: String,
    engagement_activities: [String],
    closure_reason: [String]
});

// Create a model
const closedModel = mongoose.model('closed_cases', closedSchema);

// Export the model
module.exports = closedModel;