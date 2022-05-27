import {lightBackground} from "./constants";

export default {
    styleOverrides: {
        root: {
            background: '#EAECF0',
            borderRadius: 16,
            padding: '2px 8px',
            '&.dot': {
                padding: 0,
            },
            '&.default .MuiBadge-dot': {
                backgroundColor: '#b2b4b7',
            }
        },
    }
} as const;
