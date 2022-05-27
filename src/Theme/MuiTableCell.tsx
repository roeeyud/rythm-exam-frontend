import {lightFontColor} from "./constants";

export default {
    styleOverrides: {
        root: {
            fontSize: '1rem',
            color: lightFontColor,
            '& .MuiTypography-root.dark-cell': {
                color: '#000000',
            }
        }
    }
} as const;
