import React, { useState } from 'react'

import { Box, Grid, TextField, Typography } from '@mui/material'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

export const AppointmentCalendar = () => {
  const [value, onChange] = useState(new Date());
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
          
        </Grid>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateCalendar disablePast />
        </LocalizationProvider>
      </Grid>
    </>
  )
}
