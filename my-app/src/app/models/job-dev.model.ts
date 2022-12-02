export class JobDev {
    date_participated?: [String];
    uid?: Number;
    employment_goal?: String;
    employer_contacted?: String;
    employer_hiring?: String;
    contact_method?: String;
    date_of_contact?: String;
    nature_of_visit?: String;
    visit_desc?: String;
}

export const JobColumns = [
    // {
    //     key: 'isSelected',
    //     type: 'isSelected',
    //     label: '',
    // },
    {
        key: 'date_participated',
        type: 'text',
        label: 'Date Participated',
    },
    {
        key: 'uid',
        type: 'text',
        label: 'UID',
    },
    {
        key: 'employment_goal',
        type: 'text',
        label: 'Employment Goal',
    },
    {
        key: 'employer_contacted',
        type: 'text',
        label: 'Employer Contacted',
    },
    {
        key: 'employer_hiring',
        type: 'text',
        label: 'Employer Hiring',
    },
    {
        key: 'contact_method',
        type: 'text',
        label: 'Contact Method',
    },
    {
        key: 'date_of_contact',
        type: 'text',
        label: 'Date of Contact',
    },
    {
        key: 'nature_of_visit',
        type: 'text',
        label: 'Nature of Visist',
    },
    {
        key: 'visit_desc',
        type: 'text',
        label: 'Visit Description',
    },
    {
        key: 'isEdit',
        type: 'isEdit',
        label: '',
    }
]