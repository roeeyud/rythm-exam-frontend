import {Container} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MuiAppBar from '@mui/material/AppBar';
import { ReactComponent as SettingsIcon } from '../icons/settings.svg';
import { ReactComponent as BellIcon } from '../icons/bell.svg';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

export default function AppBar() {
    const toolbarButtons = [
        'Home',
        'Dashboard',
        'Projects',
        'Tasks',
        'Reporting',
        'Users'
    ];
    return <MuiAppBar position="static" color={'default'} >
        <Container maxWidth={'xl'}>
            <Toolbar>
                <Stack
                    overflow={'hidden'}
                    direction={'row'}
                    spacing={1}
                    height={'100%'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    width={'100%'}
                >
                    <Stack direction={'row'} spacing={1}>
                        {toolbarButtons.map((button) => <Button className={'large-text'} key={button} color={'inherit'}>{button}</Button>)}
                    </Stack>
                    <Stack direction={'row'} spacing={1}>
                        <IconButton>
                            <SettingsIcon />
                        </IconButton>
                        <IconButton>
                            <BellIcon />
                        </IconButton>
                        <Avatar
                            src={'https://rythm-exam-avatar-bucket.s3.eu-west-1.amazonaws.com/AvatarOlivia.png'}
                        />
                    </Stack>
                </Stack>
            </Toolbar>
        </Container>
    </MuiAppBar>
}
