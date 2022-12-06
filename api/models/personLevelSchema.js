const mongoose = require("mongoose");

const personLevelSchema = new mongoose.Schema({
    uid: String,
    phase_of_service: String,
    first_date: String,
    ESP_assigned: String,
    ipe_with_vr: String,
    vr_id: Number,
    county_id: Number,
    current_clinical_services: [String],
    clinical_services_agency: String,
    benefits: String,
    first_contact: String,
    start_date: String,
    pre_f_f_contact_date: String,
    post_f_f_contact_date: String,
    f_f_contacts: String,
    employer_name: String,
    job_title: String,
    job_duties: String,
    hourly_pay: Number,
    end_date: String,
    school_name: String,
    cert_degree: String,
    full_or_part: String,
    hours: Number
});

// Create a model
const personLevelModel = mongoose.model('person_level', personLevelSchema);

// Export the model
module.exports = personLevelModel;