import { Divider, Typography } from '@mui/material'
import React, { FC, ReactNode } from 'react'

interface Props{
  title:    string
  children: ReactNode
}

export const DecoratedTitle: FC<Props> = ({ title, children }) => {
  return (
    <>
      <Typography variant='h2' component='h2'>{ title }</Typography>

      <Divider 
          sx={{ width: '100%', mb: 2, background: 'yellow', height: 5}}
          className='divider-animation'
      />

      {
        children
      }
    </>
  )
}
