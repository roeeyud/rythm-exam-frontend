import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import {primaryColor } from './constants'
import MuiTypography from './MuiTypography';
import MuiBreadcrumbs from './MuiBreadcrumbs';
import MuiButton from './MuiButton';
import MuiIconButton from './MuiIconButton';
import MuiPaper from './MuiPaper';
import MuiSelect from './MuiSelect';
import MuiInputBase from './MuiInputBase';
import MuiOutlinedInput from './MuiOutlinedInput';
import MuiToolbar from './MuiToolbar';
import MuiAppBar from './MuiAppBar';
import MuiDialogTitle from './MuiDialogTitle';
import MuiIcon from './MuiIcon';
import MuiListItem from './MuiListItem';
import MuiBadge from './MuiBadge';
import MuiTextField from './MuiTextField';
import MuiCheckbox from './MuiCheckbox';
import MuiTableCell from './MuiTableCell';
import MuiChip from './MuiChip';
import MuiTableHead from './MuiTableHead';
import MuiTableContainer from './MuiTableContainer';

const theme = createTheme({
    palette: {
        primary: {
            main: primaryColor,
        },
    },
    components: {
        MuiTypography,
        MuiBreadcrumbs,
        MuiButton,
        MuiIconButton,
        MuiPaper,
        MuiSelect,
        MuiInputBase,
        MuiOutlinedInput,
        MuiToolbar,
        MuiAppBar,
        MuiDialogTitle,
        MuiIcon,
        MuiListItem,
        MuiBadge,
        MuiTextField,
        MuiCheckbox,
        MuiTableCell,
        MuiChip,
        MuiTableHead,
        MuiTableContainer,
    }
})

interface ThemeProps {
    children: JSX.Element;
}

export default function Theme({ children }: ThemeProps) {
    return <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
}
