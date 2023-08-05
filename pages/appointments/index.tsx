import { HomeLayout } from '@/components/layouts'
import { Typography } from '@mui/material'
import React from 'react'

const AppointmentsHomePage = () => {
  return (
    <HomeLayout 
      title='Vamos a empezar a crear tu sita' 
      desc='Es hora de empezar el proceso para agendar tu cita con nosotros'
    >
      <Typography  variant='h1' component='h1'>Comenzemos</Typography>
    </HomeLayout>
  )
}

export default AppointmentsHomePage