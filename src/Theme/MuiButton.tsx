import { lightBackground, lightBorder, primaryColor} from "./constants";

export default {
    styleOverrides: {
        root: {
            textTransform: 'none',
            borderRadius: 6,
            color: '#344054',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            padding: '5px 10px',
            height: 40,
            fontWeight: 500,
            fontSize: '1rem',
            '&:hover': {
                background: lightBackground,
            },
            '&.large-text': {
                fontWeight: 600,
                fontSize: '1.143rem',
            },
            '& svg': {
                marginRight: 10
            },
            '&.cancel-button': {
                boxShadow: 'none',
                background: '#F9F5FF',
                color: primaryColor,
                '&:hover': {
                    background: '#F9F5FF'
                }
            },
            '&.page-button': {
                minWidth: 40,
                height: 40,
                fontWeight: 600,
                '&:hover': {
                    background: '#F9F5FF',
                    color: primaryColor,
                },
                '&.MuiButton-textPrimary': {
                    background: '#F9F5FF',
                }
            }
        },
        outlinedInherit: {
            border: lightBorder,
            boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
        },
        containedPrimary: {
            color: '#ffffff',
            background: '#7F56D9',
            '&:hover': {
                background: primaryColor
            }
        },
        textPrimary: {
            color: primaryColor
        }
    }
} as const;
