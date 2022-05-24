import Stack from "@mui/material/Stack";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ReactComponent as DownloadIcon } from "../icons/download.svg";

import {borderStyle} from "../Theme";

export default function PageHeader() {
    return <Stack
        direction={'row'}
        justifyContent={'space-between'}
        paddingBottom={4}
        borderBottom={borderStyle}
        spacing={2}
    >
        <Typography variant={'h4'} fontWeight={600}>
            Orders
        </Typography>
        <Stack
            direction={'row'}
            spacing={2}
        >
            <Button variant={'outlined'} color={'inherit'}>
                <DownloadIcon />
                Download all
            </Button>
            <Button variant={'contained'} color={'primary'}>
                New Order
            </Button>
        </Stack>
    </Stack>
}
