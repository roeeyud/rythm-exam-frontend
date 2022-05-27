import {lightFontColor, primaryColor} from "./constants";

export default {
    styleOverrides: {
        root: {
            margin: '10px 0px',
            borderRadius: 6,
            height: 36,
            color: lightFontColor,
            '&.Mui-selected': {
                color: primaryColor,
                '& p': {
                    fontWeight: 600,
                }
            }
        },

    }
} as const;
