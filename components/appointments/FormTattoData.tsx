import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import React from 'react'

export const FormTattoData = () => {
  return (
    <>
      <Typography variant='h3' component='h3'>Sube la imagen de tu tatto y su informacion</Typography>
      <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap'}}>
        <TextField
          label='Imagen'
          placeholder='Juan Perez'
          autoFocus
        />

        <TextField
          label='Alto'
          placeholder='Juan Perez'
          autoFocus
        />

        <TextField
          label='Ancho'
          placeholder='Juan Perez'
          autoFocus
        />

      </Box>

      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Seleccion el estilo de tu tatuaje</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="blackAndWhite"
          name="radio-buttons-group"
        >
          <FormControlLabel value="blackAndWhite" control={<Radio />} label="Blanco y negro" />
          <FormControlLabel value="color" control={<Radio />} label="Color" />
        </RadioGroup>
      </FormControl>
    </>
  )
  
}
