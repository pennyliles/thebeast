const mongoose = require("mongoose");

// Create a schema
const IPSSchema = mongoose.Schema({
    staff_name: String,
    time_period: String,
    work_week: String,
    hours_worked: Number,
    team_hours_spent: Number,
    community_hours_spent: Number,
    train_PTO_hours_spent: Number
});

// Create a model
const IPSModel = mongoose.model("ips_activity_log", IPSSchema);

// Export the model
module.exports = IPSModel;