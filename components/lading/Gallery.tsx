import React from 'react'
import { dataToTest } from './dataToTestGallery';
import { Box, CardContent, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { DecoratedTitle } from '../ui';



export const Gallery = () => {
  return (
    <>
      <Grid item xs={12} lg={6}>

        <DecoratedTitle title='Galeria'>

        </DecoratedTitle>
      </Grid>

      <Box sx={{ width: '100%', position: 'relative', display: { xs: 'flex', md: 'none'}, overflowX: 'scroll', scrollSnapType: 'x'}}>
        {
          dataToTest.map(({img, desc}, idx) => (
            <CardContent
              key={idx}
              component='img'
              src={img}
              alt={desc}
              sx={{ width: 300, height: 300, left: 0, position: 'sticky', objectFit: 'cover', scrollSnapAlign: 'center'}}
            />
          ))
        }
      </Box>

      <Grid item lg={6} sx={{ display: {xs: 'none', md: 'block'}}}>
        <Grid container sx={{ p: 2}}>
          <Grid item md={6}>
            {
              dataToTest.map(( (data, idx) => {
                
                  return ( idx < (dataToTest.length / 2) ) 
                    ? (
                      <CardContent
                        key={idx}
                        component='img'
                        src={data.img}
                        alt={data.desc}
                        sx={{ width: '100%', mt: 1, borderRadius: '20px'}}
                      />
                    )
                    : <></>
              }))
            }
          </Grid>

          <Grid item md={6}>
            {
              dataToTest.map(( (data, idx) => {
                
                return ( idx >= (dataToTest.length / 2) ) 
                  ? (
                    <CardContent
                      key={idx}
                      component='img'
                      src={data.img}
                      alt={data.desc}
                      sx={{ width: '100%', mt: idx === 4 ? 10 : 1,  borderRadius: '20px'}}
                    />
                  )
                  : <></>
              }))
            }
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
