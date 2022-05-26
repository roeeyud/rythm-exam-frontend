import type { ElementType, ChangeEvent } from "react";
import MuiTextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import InputAdornment from "@mui/material/InputAdornment";

interface TextInputProps {
    value: string,
    onChange: (newValue: string) => void,
    icon: ElementType,
    placeholder: string,
    label: string,
    className?: string
}
export default function TextField({ icon: Icon, placeholder, label, value, onChange, className }: TextInputProps) {
    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        onChange(event.target.value);
    }
    return <Stack direction={'column'} spacing={1} ml={2} className={className}>
        <Typography variant={'body2'} >
            {label}
        </Typography>
        <MuiTextField
            value={value || ''}
            onChange={handleChange}
            placeholder={placeholder}
            InputProps={{
                startAdornment: <InputAdornment position="start">
                    <Icon />
                </InputAdornment>
            }}
        />
    </Stack>
}
