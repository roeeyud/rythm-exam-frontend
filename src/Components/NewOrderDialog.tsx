import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import { useState } from "react";

import FileDropZone from "./FileDropZone";
import Select from "./Select";
import CustomerSelect from "./CustomerSelect";
import purchaseFrequencies from "../definitions/purchaseFrequencies";
import Button from "@mui/material/Button";
import {LinearProgress} from "@mui/material";
import Box from "@mui/material/Box";
import {styled} from "@mui/material/styles";

interface NewOrderDialogProps {
    open: boolean,
    onClose: () => void,
    onSubmit: () => void,
}

const OverlyBox = styled(Box)({
    width: '100%',
    height: '100%',
    opacity: .5,
    background: '#FFFFFF',
    zIndex: 1,
    position: 'absolute',
    top: 0,
    left: 0
})

export default function NewOrderDialog({ open, onClose, onSubmit }: NewOrderDialogProps) {
    const [fileName, setFileName] = useState<string | null>(null);
    const [submitInProgress, setSubmitInProgress] = useState(false);
    const [customerId, setCustomerId] = useState<string | null>(null);
    const [purchaseFrequency, setPurchaseFrequency] = useState<string | null>(purchaseFrequencies[0].value);
    const submitEnabled = fileName && customerId && purchaseFrequency;

    async function handleSubmit() {
        setSubmitInProgress(true);
        const payload = {
            customerId,
            invoiceId: fileName,
            invoiceName: fileName,
            purchase: purchaseFrequency,
        };
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        };
        const result = await fetch(`${process.env.REACT_APP_API_URL}/order`, options);
        setSubmitInProgress(false);
        onSubmit();
    }

    function handleClose() {
        if (submitInProgress) {
            return;
        }
        setFileName(null);
        setCustomerId(null);
        setPurchaseFrequency(purchaseFrequencies[0].value);
        onClose();
    }

    function SubmitInProgressOverlay() {
        if (!submitInProgress) {
            return null;
        }
        return <OverlyBox>
            <LinearProgress variant={'indeterminate'} />
        </OverlyBox>
    }

    return <Dialog open={open} onClose={handleClose} maxWidth={false}>
        <DialogTitle>
            Create new order
        </DialogTitle>
        <DialogContent>
            <SubmitInProgressOverlay />
            <FileDropZone fileName={fileName} setFileName={setFileName} />
            <Stack direction={'row'} spacing={2} alignItems={'end'} justifyContent={'space-between'} >
                <Stack direction={'row'} spacing={2}>
                    <CustomerSelect value={customerId} onChange={setCustomerId} />
                    <Select label={'Purchase Frequency'} value={purchaseFrequency} onChange={setPurchaseFrequency} options={purchaseFrequencies} />
                </Stack>
                <Stack direction={'row'} spacing={2} >
                    {/*can't find this style of button anywhere else so made into a class*/}
                    <Button variant={'contained'} onClick={handleClose} color={'inherit'} className={'cancel-button'}>
                        Cancel
                    </Button>
                    <Button variant={'contained'} onClick={handleSubmit} color={'primary'} disabled={!submitEnabled}>
                        Save Order
                    </Button>
                </Stack>
            </Stack>
        </DialogContent>
    </Dialog>
}
