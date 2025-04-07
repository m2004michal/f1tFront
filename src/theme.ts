// theme.ts (or theme.js)
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1e1e1e',         // navbar bg when color="primary"
            contrastText: '#ffffff'  // text color
        },
        secondary: {
            main: '#ff4081',
            contrastText: '#000000'
        },
        background: {
            default: '#f5f5f5'
        },
    },
});

export default theme;