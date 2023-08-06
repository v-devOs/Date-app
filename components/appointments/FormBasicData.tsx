import React from 'react'
import { Box, TextField, Typography } from '@mui/material';

export const FormBasicData = () => {
  return (
    <>
      <Typography variant='h3' component='h3'>Ingresa los siguiente datos</Typography>
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap'}}>
        <TextField
          label='Nombre'
          placeholder='Juan Perez'
          autoFocus
        />

        <TextField
          label='Apellido'
          placeholder='Juan Perez'
          autoFocus
        />

        <TextField
          label='Tel'
          placeholder='Juan Perez'
          autoFocus
        />
      </Box>
    </>
  )
}
