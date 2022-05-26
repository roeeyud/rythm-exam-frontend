import UseOrderQuery from "../definitions/UseOrderQuery";
import {styled} from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import SearchIcon from '@mui/icons-material/Search';

import orderStatuses from '../definitions/orderStatuses';
import { lightBackground } from '../Theme';
import TextField from "./TextField";
import Select from "./Select";
import CustomerSelect from "./CustomerSelect";

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


export default function QueryBar({ setQuery, query }: QueryBarProps) {
    return <RootStack direction={'row'} spacing={2}>
        <SearchTextField
            value={query.search}
            placeholder={'Search'}
            label={'Search for order'}
            onChange={(newSearch) => setQuery({ ...query, search: newSearch })}
            icon={SearchIcon}
        />
        <Select
            value={query.status}
            label={'Status'}
            onChange={(newStatus) => setQuery({ ...query, status: newStatus || '' })}
            options={orderStatuses}
        />
        <CustomerSelect
            value={query.customerId}
            onChange={(customerId) => setQuery({ ...query, customerId: customerId || '' })}
            allowAll={true}
        />
    </RootStack>;
}
