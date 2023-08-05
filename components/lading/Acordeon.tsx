import React, { ReactNode, useState } from 'react'
import { Box, Button, Grid, IconButton, SxProps, Theme, Typography, keyframes } from '@mui/material'
import ArrowDown from '@mui/icons-material/KeyboardDoubleArrowDownOutlined';
import ArrowUpRight from '@mui/icons-material/ArrowOutwardOutlined';


interface optionsAppointment {
  key:      string
  option:   string
  link?:    string
  desc:     ReactNode
}

const stylesAcordeon: SxProps<Theme> = {
  background: '#202020',
  p: 2,
  mb: 2,
  mt: 2,
  display: 'flex',
  justifyContent: 'space-between',
  borderRadius: '10px',
  cursor: 'pointer',
}

const stylesDescAcordeon: SxProps<Theme> = {
  background: '#252525',
  p: 2,
  mt: 2,
  borderRadius: '5px',
  position: 'relative'
}

const infoOptionsToCreateAppoitnment: optionsAppointment[] = [
  {
    key: 'presencial',
    option: 'Agendar cita presencial',
    desc: 
      <Grid sx={stylesDescAcordeon} className='fade-in-animation'>
        <Typography variant='body1'>
          Puedes acudir personalmmente a nuestro estudio y realizar la cotizacion del tatuaje 
          que deseas, tendras que pagar el adelanto de la cita e inmediatamnete de haremos saber cuales
          son nuestras fechas y horarios disponibles
        </Typography>
      </Grid>

  },
  {
    key: 'online',
    option: 'Agendar cita online',
    desc: 
      <Grid sx={stylesDescAcordeon} className='fade-in-animation'>
        <Typography variant='body1'>
          Realizaras el pago de la cita por medio de paypal o tarjeta, posteriormente te entregaremos
          un codigo unico el cual ingresaras para poder escojer el dia y hora que mas se te acomode,
          a continuacion deberas de cargar una foto de tu tatuaje, las medidas(alto y ancho), y listo
          en cuestion de minutos tendras tu cita agendada
        </Typography>
      </Grid>,
    link: '/dates'
  },
]


export const Acordeon = () => {

  const [ keyAcordeon, setKeyAcordeon ] = useState('')

  const onChangeKeyAcordeon = ( key: string ) => {
    const keyTosSet = key === keyAcordeon ? '' : key

    setKeyAcordeon( c => c = keyTosSet )
  }

  return (
    <>

      {
        infoOptionsToCreateAppoitnment.map(({ desc, option, link, key  }) => (
          <Grid 
            container 
            key={key} 
            sx={stylesAcordeon}
            onClick={ () => onChangeKeyAcordeon(key) }
          >
            <Typography variant='h3' component='h3'>{ option }</Typography>
      
            <IconButton>
              <ArrowDown/>
            </IconButton>

            <Box sx={{ display: keyAcordeon === key ? 'block' : 'none'}}>
              {
                desc
              }

              <Button 
                sx={{ color: 'white', border: '1px solid red', mt: 3, display: link ? 'flex': 'none'}} 
                endIcon={<ArrowUpRight/>}
                fullWidth
              >
                <Typography variant='body2'>Comenzemos</Typography>
              </Button>
            </Box>
            
          </Grid>
        ))
      }


    </>
  )
}
