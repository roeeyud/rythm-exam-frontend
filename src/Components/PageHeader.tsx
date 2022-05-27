import { useState } from "react";
import Stack from "@mui/material/Stack";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { ReactComponent as DownloadIcon } from "../icons/download.svg";
import NewOrderDialog from './NewOrderDialog';
import {borderStyle} from "../Theme/constants";

interface PageHeaderProps {
    onSubmitNewOrder: () => void,
}

export default function PageHeader({ onSubmitNewOrder }: PageHeaderProps) {
    const [openNewOrderDialog, setOpenNewOrderDialog] = useState(false);

    return <Stack
        direction={'row'}
        justifyContent={'space-between'}
        paddingBottom={4}
        marginBottom={4}
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
            <Button variant={'contained'} color={'primary'} onClick={() => setOpenNewOrderDialog(true)}>
                New Order
            </Button>
        </Stack>
        <NewOrderDialog open={openNewOrderDialog} onClose={() => setOpenNewOrderDialog(false)} onSubmit={onSubmitNewOrder} />
    </Stack>
}
