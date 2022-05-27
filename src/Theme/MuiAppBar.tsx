import {borderStyle} from "./constants";

export default {
    styleOverrides: {
        root: {
            boxShadow: 'none',
            background: '#ffffff',
            borderBottom: borderStyle,
        }
    }
} as const;
