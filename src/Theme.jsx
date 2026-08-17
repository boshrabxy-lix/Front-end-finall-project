import { createTheme } from '@mui/material/styles';

const getTheme = (mode) => {
  return createTheme({
    palette: {
      mode: mode,
      primary: {
        main: '#9AA4F5',
        dark: '#7887f4f9',
        contrastText: '#fff',
      },
      secondary:{
        main: '#94a3b8',
        light:'#d2dae443',
      },
      info:{
        main:'#2676f6',
        dark:'#1057c9'
      },
    },
    typography: {
      fontFamily: 'math',
      contrastText: '#fff',
    },
    text: {
      secondary: '#94a3b8',
    }
  });
}
export default getTheme;