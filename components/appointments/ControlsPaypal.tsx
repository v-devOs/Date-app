import React from 'react'
import { Box, Typography } from '@mui/material';
import { PayPalButtons } from '@paypal/react-paypal-js';

export const ControlsPaypal = () => {
  return (
    <>
      <Typography variant='h3' component='h3'>Realizemos el anticipo del pago</Typography>
      
      <Box>
        <PayPalButtons/>
      </Box>
    </>
    )
}
