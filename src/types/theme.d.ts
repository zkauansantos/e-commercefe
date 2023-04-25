import 'styled-components';
// theme.d.ts

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      dark: {
        800: string;
        600: string;
        500: string;
      };
      light: {
        400: string;
        300: string;
        200: string;
        100: string;
      };
      blue: {
        700: string;
      };
    };
  }
}
