import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";


export const darkTheme = createTheme({
  palette: {
    mode: 'dark',

    primary: {
      main: '#252525'
    },

    secondary: {
      main: '#101010'
    },

    error: {
      main: red.A400
    }
    
  },
  components: {
    MuiTypography: {
      defaultProps: {
        mt: 2
      }
    },

    MuiGrid: {
      defaultProps: {
        mb: 2
      }
    },

    MuiAppBar: {
      defaultProps: {
        position: 'fixed',
      }
    }
  }
})