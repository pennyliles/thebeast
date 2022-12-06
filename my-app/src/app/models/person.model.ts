export class Person {
    uid?: String;
    phase_of_service?: String;
    first_date?: String;
    ESP_assigned?: String;
    ipe_with_vr?: String;
    vr_id?: Number;
    county_id?: Number;
    current_clinical_services?: [String];
    clinical_services_agency?: String;
    benefits?: String;
    first_contact?: String;
    start_date?: String;
    pre_f_f_contact_date?: String;
    post_f_f_contact_date?: String;
    f_f_contacts?: String;
    employer_name?: String;
    job_title?: String;
    job_duties?: String;
    hourly_pay?: Number;
    end_date?: String;
    school_name?: String;
    cert_degree?: String;
    full_or_part?: String;
    hours?: Number;
}

export const PersonColumns = [
    // {
    //     key: 'isSelected',
    //     type: 'isSelected',
    //     label: '',
    // },
    {
        key: 'uid',
        type: 'text',
        label: 'UID',
    },
    {
        key: 'vr_id',
        type: 'number',
        label: 'VR Unit ID',
    },
    {
        key: 'county_id',
        type: 'number',
        label: 'County ID',
    },
    {
        key: 'employer_name',
        type: 'text',
        label: 'Employer Name',
    },
    {
        key: 'job_title',
        type: 'text',
        label: 'Job Title',
    },
    {
        key: 'school_name',
        type: 'text',
        label: 'School',
    },
    {
        key: 'isEdit',
        type: 'isEdit',
        label: '',
    }
]

export const DemoColumn = [
    {
        key: 'uid',
        type: 'text',
        label: 'UID',
    },
    {
        key: 'phase_of_service',
        type: 'text',
        label: 'Phase of Service',
    },
    {
        key: 'first_date',
        type: 'text',
        label: 'First Date',
    },
    {
        key: 'ESP_assigned',
        type: 'text',
        label: 'ESP',
    }
];

export const VRColumn = [
    {
        key: 'ipe_with_vr',
        type: 'text',
        label: 'IPE?',
    },
    {
        key: 'vr_id',
        type: 'number',
        label: 'VR Unit ID',
    }
];

export const ClinicalColumn = [
    {
        key: 'county_id',
        type: 'number',
        label: 'County ID',
    },
    {
        key: 'current_clinical_services',
        type: 'text',
        label: 'Clinical Services',
    },
    {
        key: 'clinical_services_agency',
        type: 'text',
        label: 'Clinical Agency',
    }
];

export const EmploymentColumn = [
    {
        key: 'benefits',
        type: 'text',
        label: 'Benefits',
    },
    {
        key: 'first_contact',
        type: 'text',
        label: 'First Contact',
    },
    {
        key: 'start_date',
        type: 'text',
        label: 'Start Date of Recent Job',
    },
    {
        key: 'pre_f_f_contact_date',
        type: 'text',
        label: 'ESP Contact Prior to Job',
    },
    {
        key: 'post_f_f_contact_date',
        type: 'text',
        label: 'ESP Contact Post Job Start',
    },
    {
        key: 'f_f_contacts',
        type: 'number',
        label: 'ESP Contacts',
    },
    {
        key: 'employer_name',
        type: 'text',
        label: 'Employer Name',
    },
    {
        key: 'job_title',
        type: 'text',
        label: 'Job Title',
    },
    {
        key: 'job_duties',
        type: 'text',
        label: 'Job Duties',
    },
    {
        key: 'hourly_pay',
        type: 'number',
        label: 'Hourly Pay',
    },
    {
        key: 'end_date',
        type: 'text',
        label: 'Job End Date',
    }
];

export const EducationColumn = [
    {
        key: 'school_name',
        type: 'text',
        label: 'School',
    },
    {
        key: 'cert_degree',
        type: 'text',
        label: 'Degree',
    },
    {
        key: 'full_or_part',
        type: 'text',
        label: 'Full or Part Time',
    },
    {
        key: 'hours',
        type: 'number',
        label: 'Hours',
    }
];