export default {
    styleOverrides: {
        root: {
            height:  22,
            padding: '2px 8px 2px 10px',
            '&.MuiChip-colorSuccess': {
                background: '#ECFDF3',
                color: '#027A48',
            },
            '&.MuiChip-colorWarning': {
                background: '#F8EBDF',
                color: '#DB7E27',
            },
            '&.MuiChip-colorError': {
                background: '#FEF3F2',
                color: '#B42318',
            }
        },
        label: {
            paddingTop: 0,
            paddingRight: 5,
        }

    }
} as const;
