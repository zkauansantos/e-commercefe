import 'styled-components';
// theme.d.ts

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      bgDark: string
      bgSemiDark: string
      bgLight: string
      bgSemiLight: string
      dark: string
      separator: string
      details: string
      text: string
    }
  }
}
