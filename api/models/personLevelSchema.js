const mongoose = require("mongoose");

const personLevelSchema = new mongoose.Schema({
    uid: String,
    phase_of_service: String,
    first_date: String,
    ipe_with_vr: Boolean,
    vr_id: Number,
    county_id: Number,
    current_clinical_services: [String],
    clinical_services_agency: String
});

// Create a model
const personLevelModel = mongoose.model('person_level', personLevelSchema);

// Export the model
module.exports = personLevelModel;