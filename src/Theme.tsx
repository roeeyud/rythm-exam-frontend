import React from 'react';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const borderColor = '#EAECF0';
export const borderStyle = `1px solid ${borderColor}`;

const theme = createTheme({
    palette: {
        primary: {
            main: '#6941C6'
        }
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
                        background: '#F9FAFB',
                    },
                    '&.large-text': {
                        fontWeight: 600,
                        fontSize: 16,
                    },
                    '& svg': {
                        marginRight: 10
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
                        background: '#6941C6'
                    }
                }
            }
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    borderRadius: 6,
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
