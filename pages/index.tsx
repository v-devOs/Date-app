import React from 'react'
import {  Grid, SxProps, Theme, Typography } from '@mui/material'
import { HomeLayout } from '@/components/layouts'
import { Gallery, InfoAppointments, InfoCards } from '@/components/lading'

const stylesContainerTitles: SxProps<Theme> = {
  background: 'linear-gradient(rgba(5,7,12,0.75), rgba(5,7,12,0.75)), url("/images/main-background.jpg")',
  p: 2,
  minHeight: '90vh',
  maxHeight: '95vh'
}


const HomePage = () => {
  return (
    <HomeLayout title='Tatto Studio' desc='Estudio enfocado en la buena atencion al cliente'>
      <Grid 
        sx={stylesContainerTitles}
        container
      >
        <Grid 
          sx={{ textAlign: 'center', mt: 10}}
          item
        >
          <Typography variant='h1' component='h1'>Nombre Estudio</Typography>
          <Typography variant='body1'>Tattos personalizados / Pircings</Typography>
        </Grid>

      </Grid>

      <Grid container sx={{ p: 2, background: 'white', color: '#101010'}} className='appearWhenScroll'>
        <InfoCards/>
      </Grid>

      <Grid container sx={{ p: 2 }} className='appearWhenScroll'>
        <InfoAppointments/>
      </Grid>

      <Grid container sx={{p: 2, background: 'white', color: '#101010'}} className='appearWhenScroll'>
        <Gallery/>
      </Grid>

    </HomeLayout>
  )
}

export default HomePage