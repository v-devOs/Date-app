import { FC } from 'react';
import { Box, Card, CardContent, CardMedia, SxProps, Theme, Typography } from '@mui/material'

interface Props{
  imagesToShow: ImagesToShow[]
}

export interface ImagesToShow{
  img: string,
  desc?: string,
  tattoer?:string
}

const stylesCarrousel: SxProps<Theme> = { 
  width: '100%', 
  position: 'relative', 
  display: { xs: 'flex', sm: 'none'}, 
  overflowX: 'scroll', 
  scrollSnapType: 'x',
  
  // mb: 4,
  mt: 2
}

const styleItemsCarrousel: SxProps<Theme> = {
  width: '70%', 
  height: 300, 
  left: 0, 
  position: 'sticky', 
  objectFit: 'cover', 
  scrollSnapAlign: 'center',
  borderRadius: '10px',
  mr: 5
}

export const Carrousel: FC<Props> = ({ imagesToShow }) => {
  return (
    <>
      <Box sx={stylesCarrousel}>
        {
          imagesToShow.map(({img, desc, tattoer}, idx) => (
              <CardMedia
                key={idx}
                component='img'
                src={img}
                alt={desc}
                sx={styleItemsCarrousel}
              />
          ))
        }
      </Box>
    </>
  )
}
