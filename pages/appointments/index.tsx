import React from 'react'
import { AppointmentCalendar, ControlsPaypal, FormBasicData, FormTattoData } from '@/components/appointments'
import { HomeLayout } from '@/components/layouts'
import { Modal } from '@/components/ui'
import { Divider, Grid, Typography } from '@mui/material'

const AppointmentsHomePage = () => {
  return (
    <HomeLayout 
      title='Vamos a empezar a crear tu sita' 
      desc='Es hora de empezar el proceso para agendar tu cita con nosotros'
    >
      <Modal showImage={false}/>

      <Grid container>
        <Grid container sx={{ bgcolor: '#202020', m:2, p: 2, borderRadius: '5px'}} >

          <Grid item mb={2} xs={12}>
            <Typography variant='h1' component='h1'>Bienvenido comenzemos a crear tu cita</Typography>
          </Grid>

          <Grid item xs={12} lg={6} mb={10}>
            <FormBasicData/>
          </Grid>

          <Grid item xs={12} lg={6} mb={10}>
            <ControlsPaypal/>
          </Grid>

          <Grid item xs={12} lg={6} mb={10}>
            <FormTattoData/>
          </Grid>

          <Grid item xs={12} lg={6} mb={10}>
            <AppointmentCalendar/>
          </Grid>

        </Grid>
      </Grid>
    </HomeLayout>
  )
}

export default AppointmentsHomePage