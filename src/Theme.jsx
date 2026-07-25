import { createTheme } from "@mui/material/styles";

const getTheme = (mode) => {
  return createTheme({
    palette:
      mode = mode,
    typography: {
      fontFamily: 'cursive',
      h2:{
        fontWeight:500,
        fontFamily:'revert'
      }
    }

  })
}
export default getTheme();