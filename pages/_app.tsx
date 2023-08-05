import type { AppProps } from 'next/app'
import { UIProvider } from '@/context'

import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'

import { darkTheme } from '@/theme'
import '@/styles/animations.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>

      <ThemeProvider theme={ darkTheme }>
        <CssBaseline/>
        <Component {...pageProps} />
      </ThemeProvider>
    </UIProvider>
  )
}
