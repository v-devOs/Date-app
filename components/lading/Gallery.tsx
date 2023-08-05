import React from 'react'
import { dataToTest } from './dataToTestGallery';
import { Box, CardContent, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { DecoratedTitle } from '../ui';



export const Gallery = () => {
  return (
    <>
      <Grid item xs={12} md={6}>

        <DecoratedTitle title='Galeria'>

        </DecoratedTitle>
      </Grid>

      <Box sx={{ width: '100%', position: 'relative', display: { xs: 'flex', 'md': 'none'}, overflowX: 'scroll', scrollSnapType: 'x'}}>
        {
          dataToTest.map(({img, desc}, idx) => (
            <CardContent
              key={idx}
              component='img'
              src={img}
              alt={desc}
              sx={{ width: '100%', left: 0, position: 'sticky', objectFit: 'cover', scrollSnapAlign: 'center'}}
            />
          ))
        }
      </Box>

      <Grid item md={6}>
        <Grid container sx={{ p: 2}}>
          <Grid item md={6}>
          </Grid>
          <Grid item md={6}>
          </Grid>
        </Grid>
      </Grid>
    

    </>
  )
}
