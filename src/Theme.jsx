import { createTheme } from '@mui/material/styles';


const getTheme = (mode) => {
  return createTheme({
    palette: {
      mode: mode,
      primary: {
        main: '#9AA4F5',
        contrastText: '#fff',
      },
    },
    typography: {
      fontFamily:'math',
      contrastText: '#fff',
    }, 
     text: {
      secondary: '#94a3b8',
    }
  });
}
export default getTheme;