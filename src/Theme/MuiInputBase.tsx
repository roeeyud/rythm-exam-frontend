import {lightBorder} from "./constants";

export default {
    styleOverrides: {
        root: {
            border: lightBorder,
            '& fieldset': {
                border: 'none'
            },
            background: '#FFFFFF'
        }
    }
} as const;
