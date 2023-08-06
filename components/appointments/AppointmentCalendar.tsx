import React, { useState } from 'react'

import { Box, Grid, TextField, Typography } from '@mui/material'
import 'react-calendar/dist/Calendar.css'
import { DateCalendar } from '@mui/x-date-pickers'

export const AppointmentCalendar = () => {

  return (
    <>
      <Typography variant='h3' component='h3'>Ingresa el codigo de la cita y selecciona la fecha mas comoda</Typography>


      <Grid container>

        <Grid item xs={12} lg={6}>
          <TextField
            label='Codigo cita'
            placeholder='UEGL12062023678'
          />
        </Grid>

        <Grid item xs={12} lg={6}>
            <DateCalendar disablePast />
        </Grid>
      </Grid>
    </>
  )
}
