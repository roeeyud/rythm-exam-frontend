import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';

import orderStatuses from "../definitions/orderStatuses";
import purchaseFrequencies from "../definitions/purchaseFrequencies";
import Order from "../definitions/orderInterface";
import UseOrderQuery from "../definitions/UseOrderQuery";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

interface QueryBarProps {
    query: UseOrderQuery,
    orders: Array<Order> | null | Error,
}

export default function OrderTable({ orders, query }: QueryBarProps) {
    if (orders === null) {
        return <div>loading</div>
    }
    if (orders instanceof Error) {
        return <div>{orders.message}</div>;
    }
    return <TableContainer component={Paper} sx={{ minWidth: 970 }}>
        <Table sx={{ minWidth: 970 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell><Checkbox /></TableCell>
                    <TableCell>Invoice</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell>Purchase</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {orders.map(({ purchase, customer, status, createdAt, invoiceName, id, invoiceId }) => {
                    const purchaseText = purchaseFrequencies.find((purchaseFrequency) => purchaseFrequency.value === purchase)?.label || 'Invalid';
                    const orderStatus = orderStatuses.find((orderStatus) => orderStatus.value === status);
                    const createdAtText = new Date(createdAt).toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric" })
                    const orderColor = orderStatus?.color as 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
                    // const OrderIcon = orderStatus?.icon as React.ReactComponentElement<any, any> | undefined;
                    function OrderIcon() {
                        if (!orderStatus?.icon) {
                            return null;
                        }
                        const Icon = orderStatus?.icon;
                        return <Icon />
                    }

                    return <TableRow
                        key={id}
                        sx={{
                            '&:last-child td, &:last-child th': { border: 0 },
                            height: 74
                        }}
                    >
                        <TableCell width={10}><Checkbox /></TableCell>
                        <TableCell component="th" scope="row">
                            <Typography fontWeight={600} className={'dark-cell'}>
                                {invoiceName.substring(0, invoiceName.lastIndexOf('.'))}
                            </Typography>
                        </TableCell>
                        <TableCell>{createdAtText}</TableCell>
                        <TableCell >
                            <Chip
                                label={orderStatus?.label || 'invalid'}
                                color={orderColor || 'default'}
                                icon={OrderIcon ? <OrderIcon /> : undefined}
                            />
                        </TableCell>
                        <TableCell>
                            <Stack direction={'row'} spacing={1} alignItems={'center'}>
                                <Avatar src={customer.avatarUrl}>{`${customer.name.split(' ')[0][0]}${customer.name.split(' ')[1][0]}`}</Avatar>
                                <Stack direction={'column'} spacing={0}>
                                    <Typography className={'dark-cell'}>
                                        {customer.name}
                                    </Typography>
                                    <Typography>
                                        {customer.email}
                                    </Typography>
                                </Stack>
                            </Stack>
                        </TableCell>
                        <TableCell >{purchaseText}</TableCell>
                        <TableCell >
                            <Stack direction={'row'} spacing={2}>
                                <Button color={'inherit'}>
                                    Edit
                                </Button>
                                <Button
                                    component={'a'}
                                    href={`${process.env.REACT_APP_API_URL}/invoice/${invoiceId}`}
                                    color={'primary'}
                                >
                                    Download
                                </Button>
                            </Stack>
                        </TableCell>
                    </TableRow>})}
            </TableBody>
        </Table>
    </TableContainer>
}
