import {borderStyle, lightBackground} from "./constants";

export default {
    styleOverrides: {
        root: {
            background: lightBackground,
            borderBottom: borderStyle,
            fontWeight: 600,
            fontSize: '1.143rem',
        }
    }
} as const;
