import React, { ReactNode, useState } from 'react'
import { Box, Button, Grid, IconButton, Link, SxProps, Theme, Typography, keyframes } from '@mui/material'
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
  // mb: 2,
  mt: 2,
  display: 'flex',
  justifyContent: 'space-between',
  borderRadius: '10px',
  color: 'white',
  flexWrap: 'wrap'
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
    link: '/appointments'
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
        infoOptionsToCreateAppoitnment.map(({ desc, option, key, link  }) => (
          <Button 
            onClick={() => onChangeKeyAcordeon(key) }
            key={key} 
            sx={stylesAcordeon}
            fullWidth
            variant='text'
          >
            <Typography variant='h3' component='h3'>{ option }</Typography>
      
            <Box>
              <ArrowDown/>
            </Box>

            <Box sx={{ display: keyAcordeon === key ? 'block' : 'none'}}>
              { desc }

              <Box sx={{ display: link ? 'block': 'none', borderRadius: '5px'}}>
                <Link 
                  sx={{ display: 'flex', justifyContent: 'center', background: 'white', color: '#101010', p: 1, cursor: 'pointer', width: '100%'}}
                  href={link}
                  className='fade-in-animation'
                >
                  <Typography variant='body1'>Comenzemos</Typography>
                  <ArrowUpRight sx={{ mt: 2}}/>
                </Link>
              </Box>
            </Box>
          </Button>
        ))
      }
    </>
  )
}
