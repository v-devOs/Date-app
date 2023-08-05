import React from 'react'
import { Grid, Typography } from '@mui/material'
import { DecoratedTitle } from '../ui'
import { Acordeon } from '.'

export const InfoAppointments = () => {
  return (
    <>
      <Grid 
        item
        xs={12}
        lg={6}
      >
        <DecoratedTitle title='¿Quieres agendar una cita?' useColorAlternative>
          <Typography variant='h3' component='h3'>Puedes hacerlo de estas maneras</Typography>
          <Typography variant='body1'>
            1. Acudiendo a nuestro estudio en: (Datos estudio) <br/>
            2. Puedes realizarlo de manera online y agendarlo el dia mas comodo
          </Typography>
          <Typography variant='body2'>Para realizar una cita, en ambos casos deberas de
            hacer un pago por adelantado por: (inserte monto del cliente)
          </Typography>
        </DecoratedTitle>
      </Grid>

      <Grid 
        item
        xs={12}
        lg={6}
        sx={{p: { xs: 0, md: 4 }}}
      >
        <Acordeon/>
      </Grid>
    </>
  )
}
