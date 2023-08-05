import { FC } from 'react';
import { Grid, CardMedia, CardActionArea } from '@mui/material';
import { ImagesToShow, dataToTest } from '.'

interface Props{
  imagesToShow: ImagesToShow[]
}

export const Collage: FC<Props> = ({ imagesToShow }) => {
  return (
    <>
        <Grid container sx={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap', gap: 2}}>
          {
            imagesToShow.map( ( data, idx) => (
              <CardMedia
                key={idx}
                component='img'
                src={data.img}
                alt={data.desc}
                sx={{ width: '48%', borderRadius: '10px'}}
              />
            )) 
          }
        </Grid>
    </>
  )
}
