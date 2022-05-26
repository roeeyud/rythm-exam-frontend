import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// TODO: figure out how to expand theme object to allow these variables
export const separationColor = '#EAECF0';
export const lightBackground = '#F9FAFB';
export const lightFontColor = '#667085';
export const borderStyle = `1px solid ${separationColor}`;
const primaryColor = '#6941C6';

// TODO: Break this file to smaller files
const theme = createTheme({
    palette: {
        primary: {
            main: primaryColor,
        },
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                }
            }
        },
        MuiBreadcrumbs: {
            styleOverrides: {
                root: {
                    fontWeight: 600,
                    fontSize: 14,
                    marginBottom: 20,
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: 6,
                    color: '#344054',
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    lineHeight: 24,
                    padding: '5px 10px',
                    height: 40,
                    fontWeight: 500,
                    fontSize: 14,
                    '&:hover': {
                        background: lightBackground,
                    },
                    '&.large-text': {
                        fontWeight: 600,
                        fontSize: 16,
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
                    }
                },
                outlinedInherit: {
                    border: '1px solid #D0D5DD',
                    boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
                },
                containedPrimary: {
                    color: '#ffffff',
                    background: '#7F56D9',
                    '&:hover': {
                        background: primaryColor
                    }
                }
            }
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    borderRadius: 6,
                },
                sizeSmall: {
                    '& .MuiSvgIcon-root': {
                        width: 16,
                        height: 16,
                    }
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: 8
                }
            }
        },
        MuiSelect: {
            styleOverrides: {
                select: {
                    minWidth: 130,
                    '& fieldset': {
                        border: 'none'
                    }
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    border: '1px solid #D0D5DD',
                    '& fieldset': {
                        border: 'none'
                    },
                    background: '#FFFFFF'
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    height: 44
                }
            }
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    height: 73,
                    minHeight: 73,
                    '(min-width:600px)': {
                        height: 73,
                        minHeight: 73,
                    }
                }
            }
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    boxShadow: 'none',
                    background: '#ffffff',
                    borderBottom: borderStyle,
                }
            }
        },
        MuiDialogTitle: {
            styleOverrides: {
                root: {
                    background: lightBackground,
                    borderBottom: borderStyle,
                    fontWeight: 600,
                    fontSize: 16,
                }
            }
        },
        MuiDialogContent: {
            styleOverrides: {
                root: {
                    overflow: 'hidden', // Some freaky css issue I didn't want to waste too much time on
                }
            }
        },
        MuiIcon: {
            styleOverrides: {
                root: {
                    height: 25,
                    fontSize: 22
                }
            }
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    margin: '10px 0px',
                    borderRadius: 6,
                    height: 36,
                    fontSize: 14,
                    color: lightFontColor,
                    '&.Mui-selected': {
                        color: primaryColor,
                        '& p': {
                            fontWeight: 600,
                        }
                    }
                },

            }
        },
        MuiBadge: {
            styleOverrides: {
                root: {
                    padding: '2px 8px',
                    background: '#EAECF0',
                    borderRadius: 16
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    boxShadow: 'none',
                }
            }
        },
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    margin: 0,
                    padding: 0
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    color: lightFontColor,
                    '&.dark-cell': {
                        color: '#000000',
                    }
                }
            }
        }
    }
})

interface ThemeProps {
    children: JSX.Element;
}


export default function Theme({ children }: ThemeProps) {
    return <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
}
