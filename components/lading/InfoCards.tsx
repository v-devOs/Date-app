import React from 'react'
import { Box, CardMedia, Grid, SxProps, Theme, Typography } from '@mui/material';



export const InfoCards = () => {
  return (
    <>
      <Grid item xs={12} lg={7}>

        <Grid item lg={6}>
          <CardMedia
            component={'img'}
            alt='Personas tatuadas'
            src='/images/tatto-back-1.webp'
            sx={{borderRadius: '20% 20px 10px 10px',width: 300, height: 300, right: '30%'}}
          />
          <CardMedia
            component={'img'}
            alt='Personas tatuadas'
            src='/images/tatto-back-1.webp'
            sx={{borderRadius: '20% 20px 10px 10px',width: 300, height: 300, right: '30%'}}
          />
        </Grid>

        <Grid item lg={6}>

        <CardMedia
          component={'img'}
          alt='Personas tatuadas'
          src='/images/tatto-back-1.webp'
          sx={{borderRadius: '10px 20% 10px 10px',width: 300, height: 300, right: '30%', mt: 10}}
        />
        </Grid>
      </Grid>

      <Grid item xs={12} lg={5}>
        <Typography variant='h3'>Acerca de nosotros</Typography>
      </Grid>
    </>
  )
}
