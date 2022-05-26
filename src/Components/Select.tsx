import MuiSelect, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface SelectProps {
    value: null | string,
    onChange: (newValue: null | string) => void,
    options: Array<{ value: string, label: string }>,
    label: string,
}

export default function Select({ value, options, onChange, label }: SelectProps) {
    function handleChange(event: SelectChangeEvent) {
        onChange(event.target.value);
    }
    return <Stack direction={'column'} spacing={1} ml={2}>
        <Typography variant={'body2'} >
            {label}
        </Typography>
        <MuiSelect
            value={value || ''}
            onChange={handleChange}
            IconComponent={KeyboardArrowDownIcon}
        >
            {options.map(({ value, label }) => <MenuItem key={value} value={value}>{label}</MenuItem>)}
        </MuiSelect>
    </Stack>
}
