import type { AppProps } from 'next/app'
import { ThemeProvider, type DefaultTheme } from 'styled-components'
import GlobalStyle from '@/components/globalstyles'

const theme: DefaultTheme = {
  colors: {
    background: '#181A1B',
    primary: '#6878d6',
    secondary: '#fff',
    text: '#fff',
    highlight: '#fff',
    highlightBackground: '#6878d6',
    link: '#6878d6',
    textSecondary: '#ccc',
    cardBackground: '#2B2E34',
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
