import type { AppProps } from 'next/app'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import '@/styles/globals.css'
import { darkTheme } from '@/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={ darkTheme }>
      <CssBaseline/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
