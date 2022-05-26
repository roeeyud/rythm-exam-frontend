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

interface QueryBarProps {
    query: UseOrderQuery,
    orders: Array<Order> | null | Error,
}

export default function OrderTable({ orders, query }: QueryBarProps) {
    if (orders === null) {
        return <div>'loading'</div>
    }
    if (orders instanceof Error) {
        return <div>orders.message</div>;
    }
    return <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell><Checkbox /></TableCell>
                    <TableCell>Invoice</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell>Purchase</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {orders.map(({ purchase, customer, status, createdAt, invoiceName, id }) => {
                    const purchaseText = purchaseFrequencies.find((purchaseFrequency) => purchaseFrequency.value === purchase)?.label || 'Invalid';
                    const orderStatus = orderStatuses.find((orderStatus) => orderStatus.value === status);
                    const createdAtText = new Date(createdAt).toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric" })
                    const orderColor = orderStatus?.color as 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
                    const orderIcon = orderStatus?.icon as React.ReactElement | undefined;
                    return <TableRow
                        key={id}
                        sx={{
                            '&:last-child td, &:last-child th': { border: 0 },
                            height: 74
                        }}
                    >
                        <TableCell width={10}><Checkbox /></TableCell>
                        <TableCell className={'dark-cell'}>
                            <Typography fontWeight={600} >
                                {invoiceName}
                            </Typography>
                        </TableCell>
                        <TableCell>{createdAtText}</TableCell>
                        <TableCell >
                            <Chip
                                label={orderStatus?.label || 'invalid'}
                                color={orderColor || 'default'}
                                icon={orderIcon}
                            />
                        </TableCell>
                        <TableCell>{customer.name}</TableCell>
                        <TableCell >{purchaseText}</TableCell>
                    </TableRow>})}
            </TableBody>
        </Table>
    </TableContainer>
}
