import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";

export default function NavMenu() {
    const selectedView = 'orders';
    const menuItems = [
        {
            label: 'Overview',
            value: 'overview'
        },
        {
            label: 'Notifications',
            value: 'notifications',
            count: 10
        },
        {
            label: 'Analytics',
            value: 'analytics'
        },
        {
            label: 'Saved reports',
            value: 'savedReports'
        },
        {
            label: 'Orders',
            value: 'orders'
        },
        {
            label: 'User reports',
            value: 'userReports'
        },
        {
            label: 'Manage notifications',
            value: 'manageNotifications'
        },
    ]
    return <List>
        {menuItems.map((item) => <ListItem key={item.value} selected={item.value === selectedView}>
            <Stack direction={'row'} spacing={2}>
                <Typography>
                    {item.label}
                </Typography>
                {item.count !== undefined ? <Badge>{item.count}</Badge> : null}
            </Stack>
        </ListItem>)}
    </List>;
}
