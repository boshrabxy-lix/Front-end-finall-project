import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const Theme = createTheme({
  mode: 'light',
  palette: {
    primary: {
      main: "#000",
      dark:'#ea753e'
    },
    typography: {

      fontFamily: 'cursive',
      h2: {
        fontWeight: 500,
        fontFamily: 'rev',
      }
    },
  }
});
export default Theme;