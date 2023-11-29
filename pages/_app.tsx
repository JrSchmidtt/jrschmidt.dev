import type { AppProps } from 'next/app'
import { ThemeProvider, type DefaultTheme } from 'styled-components'
import GlobalStyle from '@/components/globalstyles'

const theme: DefaultTheme = {
  colors: {
    background: '#181A1B',
    primary: '#111',
    secondary: '#0070f3',
    text: '#fff',
  },
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
