import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      textSecondary: string
      link: string
      highlightBackground: string
      highlight: string
      text: string
      background: string
      primary: string
      secondary: string
      cardBackground: string
    }
  }
}
