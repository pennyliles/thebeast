export class Closed {
    uid?: String;
    ESP?: String;
    closure_date?: String;
    employment_status?: String;
    engagement_activities?: [String];
    closure_reason?: [String];
}

export const ClosedColumns = [
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
        key: 'ESP',
        type: 'text',
        label: 'ESP',
    },
    {
        key: 'closure_date',
        type: 'text',
        label: 'Closure Date',
    },
    {
        key: 'employment_status',
        type: 'select',
        label: 'Employment Status',
    },
    {
        key: 'engagement_activities',
        type: 'text',
        label: 'Engagement Activities',
    },
    {
        key: 'closure_reason',
        type: 'text',
        label: 'Closure Reason',
    },
    {
        key: 'isEdit',
        type: 'isEdit',
        label: '',
    }
]
