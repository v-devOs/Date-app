import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";


export const darkTheme = createTheme({
  palette: {
    mode: 'dark',

    primary: {
      main: '#fff'
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
        mt: 2,
        mb: 2
      },
      styleOverrides: {
        h1: {
          fontSize: 45
        },
        h2: {
          fontSize: 35
        },
        h3: {
          fontSize: 25
        },
        body1: {
          fontSize: 20
        },
        body2: {
          fontSize: 17
        }
      }
    },
    MuiGrid: {
      defaultProps: {
        width: '100%'
      }
    },

    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        position: 'fixed',
      },
      styleOverrides: {
        root: {
          backgroundColor: '#101010',
          height: 70,
        },
      }
    },

    MuiLink: {
      defaultProps: {
        underline: 'none',
        color: '#fff',
        mr: 2,
      },
      styleOverrides: {
        root: {
          ':hover': {
            color: 'yellow',
            transition: '1s',
            borderBottom: '1px solid yellow'
          }
        }
      }
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        }
      }
    },

    MuiDrawer: {
      styleOverrides: {
        root: {
        }
      }
    }
  }
})