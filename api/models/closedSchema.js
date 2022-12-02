const mongoose = require("mongoose");

// Create a schema
const closedSchema = new mongoose.Schema({
    uid: String,
    ESP: String,
    closure_date: String,
    employment_status: String,
    engagement_activities: [String],
    closure_reason: [String]
});

// Create a model
const closedModel = mongoose.model('closed_cases', closedSchema);

// Export the model
module.exports = closedModel;