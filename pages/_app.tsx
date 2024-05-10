import type { AppProps } from 'next/app'
import { ThemeProvider, type DefaultTheme } from 'styled-components'
import GlobalStyle from '@/components/globalstyles'

const theme: DefaultTheme = {
  colors: {
    background: '#181A1B',
    primary: '#6878d6',
    secondary: '#3EBAFF',
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
