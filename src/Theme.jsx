import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const Theme = createTheme({
  mode: 'light',
  palette: {
    primary: {
      main: "#e71a1a",
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