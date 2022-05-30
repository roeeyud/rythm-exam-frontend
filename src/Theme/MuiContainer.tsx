import {borderStyle} from "./constants";

export default {
    styleOverrides: {
        root: {
            '&.page-body-container': {
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                height: '100%',
            }
        }
    }
} as const;
