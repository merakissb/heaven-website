'use client';

// Supports weights 400-900
import '@fontsource-variable/maven-pro';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({

  palette: {
    primary: {
      main: '#009688',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    fontFamily: 'Maven Pro Variable, sans-serif',
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
  },
});

export default theme;
