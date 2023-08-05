import { Divider, Typography } from '@mui/material'
import React, { FC, ReactNode } from 'react'

interface Props{
  title:                string
  children:             ReactNode
  useColorAlternative?:  boolean
}

export const DecoratedTitle: FC<Props> = ({ title, children, useColorAlternative }) => {
  return (
    <>
      <Typography variant='h2' component='h2'>{ title }</Typography>

      <Divider 
          sx={{ width: '100%', mb: 2, mt: 1, background: useColorAlternative ? 'red' : 'yellow', height: 5}}
          className='divider-animation'
      />
      {
        children
      }
    </>
  )
}
