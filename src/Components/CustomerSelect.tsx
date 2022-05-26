import CircularProgress from "@mui/material/CircularProgress";
import Select from "./Select";
import useCustomers from "../hooks/useCustomers";
import Typography from "@mui/material/Typography";

interface CustomerSelectProps {
    value: null | string,
    onChange: (newValue: null | string) => void,
    allowAll?: boolean,
}

export default function CustomerSelect({ value, onChange, allowAll = false } : CustomerSelectProps) {
    const customers = useCustomers();

    if (customers === null) {
        return <CircularProgress variant={'indeterminate'} />
    }

    if (customers instanceof Error) {
        return <Typography color={'secondary'}>
            {customers.message}
        </Typography>;
    }
    const selectableCustomers = allowAll ? [{ id: 'all', name: 'All' }, ...customers] : customers;
    const defaultValue = allowAll ? 'all' : '';
    return <Select
        label={'Customer'}
        value={value || defaultValue}
        onChange={onChange} options={selectableCustomers.map(({ id, name }) => ({ label: name, value: id }))}
    />
}
