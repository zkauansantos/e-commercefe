import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { theme } from '../assets/styles/theme/default';
import { GlobalStyles } from '../assets/styles/GlobalStyles';
import Disclaimer from '../components/Disclaimer';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Disclaimer />
      </ThemeProvider>
    </BrowserRouter>
  );
}