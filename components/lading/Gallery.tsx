import React from 'react'
import { Box, Card, CardContent, Grid, Typography, CardMedia } from '@mui/material';
import { DecoratedTitle } from '../ui';
import { Carrousel } from './Carrousel';
import { Collage } from './Collage';
import { dataToTest, tattoersTest } from './dataToTestGallery';



export const Gallery = () => {
  return (
    <>
      <Grid item xs={12}>

        <DecoratedTitle title='Galeria'>
          <Typography variant='h3' component='h3' sx={{ mb: 4}}>
            Hecha un vistazo a algunos de los trabajos realizados por nuestros tatuadores,
            nuestro equipo de trabajo realiza tataujes tanto coloridos, como a blanco y negro
            con los estilos:  Id nisi nisi et cillum exercitation eiusmod adipisicing ea enim tempor.

          </Typography>
        </DecoratedTitle>

      </Grid>

      <Grid item lg={6} sx={{ display: { xs: 'none', md: 'block'}}}>
        <Collage imagesToShow={dataToTest}/>
      </Grid>

      <Carrousel imagesToShow={dataToTest}/>

      <Grid item lg={6} sx={{ display: { xs: 'none', md: 'block'}}}>
        <Collage imagesToShow={dataToTest}/>
      </Grid>
      
    </>
  )
}
