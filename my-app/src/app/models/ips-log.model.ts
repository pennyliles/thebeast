export class IpsLog {
    staff_name?: String;
    time_period?: String;
    work_week?: String;
    hours_worked?: Number;
    team_hours_spent?: Number;
    community_hours_spent?: Number;
    train_PTO_hours_spent?: Number;
}

export const IPSColumns = [
    // {
    //     key: 'isSelected',
    //     type: 'isSelected',
    //     label: '',
    // },
    {
        key: 'staff_name',
        type: 'text',
        label: 'Staff',
    },
    {
        key: 'time_period',
        type: 'text',
        label: 'Time Period',
    },
    {
        key: 'work_week',
        type: 'text',
        label: 'Work Week',
    },
    {
        key: 'hours_worked',
        type: 'number',
        label: 'Hours Worked',
    },
    {
        key: 'team_hours_spent',
        type: 'number',
        label: 'Team Hours Spent',
    },
    {
        key: 'community_hours_spent',
        type: 'number',
        label: 'Community Hours Spent',
    },
    {
        key: 'train_PTO_hours_spent',
        type: 'number',
        label: 'PTO Hours Spent',
    },
    {
        key: 'isEdit',
        type: 'isEdit',
        label: '',
    }
]
