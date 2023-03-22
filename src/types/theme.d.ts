import 'styled-components';
// theme.d.ts

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      bgDark: string
      bgLight: string
      details: string
      text: string
    }
  }
}
