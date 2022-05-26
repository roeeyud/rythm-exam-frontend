import {useState} from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import BreadCrumbs from "./BreadCrumbs";
import PageHeader from "./PageHeader";
import NavMenu from "./NavMenu";
import QueryBar from "./QueryBar";
import OrderTable from "./OrderTable";
import useOrders from '../hooks/useOrders';

export default function PageBody() {
    const [query, setQuery] = useState({ search: '', page: 0, limit: 7, status: 'pending', customerId: '', orderByCol: 'invoiceName', order: 'desc'  });
    const { orders, refreshOrders } = useOrders(query);
    return <Box mt={4} pl={4} pr={4}>
        <Container maxWidth={'xl'}>
            <BreadCrumbs />
            <PageHeader onSubmitNewOrder={refreshOrders}/>
            <Stack direction={'row'} spacing={8} width={'100%'}>
                <NavMenu />
                <Stack direction={'column'} spacing={4} flex={1}>
                    <QueryBar query={query} setQuery={setQuery} />
                    <OrderTable orders={orders} query={query}/>
                </Stack>
            </Stack>
        </Container>
    </Box>;
}
