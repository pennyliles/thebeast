export class Staffing {
    agency_name?: String;
    eval_dates?: [String];
    date_completed?: String;
    staff_name?: String;
    job_titles?: String;
    other_roles?: String;
    time_spent?: Number;
    start_date?: String;
    end_date?: String;
    hours_worked?: Number;
    IPS_training?: [String];
}

export const StaffingColumns = [
    // {
    //     key: 'isSelected',
    //     type: 'isSelected',
    //     label: '',
    // },
    {
        key: 'agency_name',
        type: 'text',
        label: 'Agency Name',
    },
    {
        key: 'eval_dates',
        type: 'text',
        label: 'Evaluation Dates',
    },
    {
        key: 'date_completed',
        type: 'text',
        label: 'Date Completed',
    },
    {
        key: 'staff_name',
        type: 'text',
        label: 'Staff Name',
    },
    {
        key: 'job_titles',
        type: 'text',
        label: 'Job Titles',
    },
    {
        key: 'other_roles',
        type: 'text',
        label: 'Other Roles',
    },
    {
        key: 'start_date',
        type: 'text',
        label: 'Start Date',
    },
    {
        key: 'hours_worked',
        type: 'number',
        label: 'Hours Worked',
    },
    {
        key: 'IPS_training',
        type: 'text',
        label: 'IPS Training',
    },
    {
        key: 'isEdit',
        type: 'isEdit',
        label: '',
    }
]