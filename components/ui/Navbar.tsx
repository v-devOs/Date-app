import { AppBar, Box, Link, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { linkHeaders } from '.'

export const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>

        <Link href='/'>
         Nombre/Logo Estudio
        </Link>

        <Box sx={{ flex: 1}}></Box>

        {
          linkHeaders.map( ({ tag, link }) => (
            <Link 
              key={{ link }.link} 
              href={{ link }.link}
              sx={{ border: 'red', display: { xs: 'none', md: 'block'}}}
            >
             { tag }
            </Link>
          ))
        }

      </Toolbar>
    </AppBar>
  )
}
