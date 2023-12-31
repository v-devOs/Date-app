import React from 'react'
import { CardMedia, Divider, Grid, SxProps, Theme, Typography } from '@mui/material';
import { DecoratedTitle } from '../ui';


const basicStylesCards: SxProps<Theme> = {
  borderRadius: '20% 10px 10px 10px',
  width: '90%',
  height: { md: 200, lg: 300}
}

const basicStylesCardsLeft: SxProps<Theme> = {
  ...basicStylesCards,
  borderRadius: '10px 20% 10px 10px',

}

const stylesContainer: SxProps<Theme> = {
  display: { xs: 'none', md: 'block'}
}

export const InfoCards = () => {
  return (
    <>

      <Grid item xs={12} md={6} sx={stylesContainer}>
        <Grid container>

          <Grid item md={6}>
            <CardMedia
              component={'img'}
              alt='Personas tatuadas'
              src='/images/tatto-back-1.webp'
              sx={{...basicStylesCards, mb: 2}}
              className='img'
            />
            <CardMedia
              component={'img'}
              alt='Personas tatuadas'
              src='/images/tatto-back-1.webp'
              sx={{...basicStylesCards}}
              className='img'
            />
          </Grid>
          <Grid item md={6}>
            <CardMedia
              component={'img'}
              alt='Personas tatuadas'
              src='/images/tatto-back-1.webp'
              sx={{ ...basicStylesCardsLeft, mt: 8, mb: 2}}
              className='img'
            />
            <CardMedia
              component={'img'}
              alt='Personas tatuadas'
              src='/images/tatto-back-1.webp'
              sx={{...basicStylesCardsLeft}}
              className='img'
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} md={6}>
        <DecoratedTitle title='Acerca de nosotros'>
          <Typography variant='body1'>
            In aute duis duis tempor ad magna incididunt dolor eiusmod. Cupidatat ut minim laborum do nisi mollit ea in qui enim cupidatat id officia. Do mollit culpa commodo sunt ipsum. Elit eiusmod ullamco esse minim qui amet ea elit incididunt ut culpa ut minim reprehenderit. Excepteur elit esse nostrud nostrud enim et. Cupidatat minim enim exercitation esse laboris amet consectetur do officia cillum pariatur dolor ad officia. Laborum fugiat labore excepteur esse voluptate aliquip.
          </Typography>
        </DecoratedTitle>
      </Grid>
    </>
  )
}
