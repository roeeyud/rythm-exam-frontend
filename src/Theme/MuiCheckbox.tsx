import {ReactComponent as UncheckedIcon} from "../icons/unchecked.svg";
import React from "react";

export default {
    styleOverrides: {
        root: {
            margin: 0,
            padding: 0,
        }
    },
    defaultProps: {
        icon: <UncheckedIcon />,
    }
} as const;
