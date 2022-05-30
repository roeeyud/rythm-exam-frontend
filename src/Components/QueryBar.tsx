import UseOrderQuery from "../definitions/UseOrderQuery";
import {styled} from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import SearchIcon from '@mui/icons-material/Search';
import {useState, useEffect} from "react";

import orderStatuses from '../definitions/orderStatuses';
import { lightBackground } from '../Theme/constants';
import TextField from "./TextField";
import Select from "./Select";
import CustomerSelect from "./CustomerSelect";
import Badge from "@mui/material/Badge";
interface QueryBarProps {
    query: UseOrderQuery,
    setQuery: (query: UseOrderQuery) => void
}

const RootStack = styled(Stack)({
    background: lightBackground,
    padding: 20,
    borderRadius: 8,
    width: '100%',
})

const SearchTextField = styled(TextField)({
    flex: 1,
})

const queryDebounceTimeout = 500;

export default function QueryBar({ setQuery, query }: QueryBarProps) {
    const [renderedQuery, setRenderedQuery] = useState<UseOrderQuery>(query);
    useEffect(() => {
        setRenderedQuery(query);
    }, [query])
    useEffect(() => {
        const timeoutRef = setTimeout(() => {
            setQuery(renderedQuery);
        }, queryDebounceTimeout);
        return () => {
            clearTimeout(timeoutRef);
        };
    }, [renderedQuery, setQuery])

    const renderOrderStatuses = [
        {
            value: 'all',
            label: 'All',
            color: null,
        },
        ...orderStatuses,
    ].map((orderStatus) => ({
        ...orderStatus,
        label: <Stack direction={'row'} alignItems={'center'} spacing={2}>
            {orderStatus.color ? <Badge variant={'dot'} color={orderStatus.color} className={`dot ${orderStatus.color}`} /> : null}
            <Typography>
                {orderStatus.label}
            </Typography>
        </Stack>
    }));
    return <RootStack direction={'row'} spacing={2} minWidth={970}>
        <SearchTextField
            value={renderedQuery.search}
            placeholder={'Search'}
            label={'Search for order'}
            onChange={(newSearch) => setRenderedQuery({ ...renderedQuery, search: newSearch, page: 0 })}
            icon={SearchIcon}
        />
        <Select
            value={renderedQuery.status}
            label={'Status'}
            onChange={(newStatus) => setRenderedQuery({ ...renderedQuery, status: newStatus || '', page: 0 })}
            options={renderOrderStatuses}
        />
        <CustomerSelect
            value={renderedQuery.customerId}
            onChange={(customerId) => setRenderedQuery({ ...renderedQuery, customerId: customerId || '', page: 0 })}
            allowAll={true}
        />
    </RootStack>;
}
