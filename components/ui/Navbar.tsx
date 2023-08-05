import React from 'react'
import { AppBar, Box, IconButton, Link, Toolbar, Typography } from '@mui/material'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
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
              key={ link } 
              href={ link }
              sx={{ display: { xs: 'none', md: 'block'}}}
            >
              {tag}
            </Link>
          ))
        }

        <Box sx={{ display: { xs: 'block', md: 'none'}, mt: 2}}>
          <IconButton>
            <MenuOutlinedIcon/>
          </IconButton>
        </Box>

      </Toolbar>
    </AppBar>
  )
}
