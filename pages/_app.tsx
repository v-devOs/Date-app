import type { AppProps } from 'next/app'
import { UIProvider } from '@/context'

import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'

import { darkTheme } from '@/theme'
import '@/styles/animations.css'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PayPalScriptProvider options={{clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || ''}}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <UIProvider>
          <ThemeProvider theme={ darkTheme }>
            <CssBaseline/>
            <Component {...pageProps} />
          </ThemeProvider>
        </UIProvider>
      </LocalizationProvider>
    </PayPalScriptProvider>
  )
}
