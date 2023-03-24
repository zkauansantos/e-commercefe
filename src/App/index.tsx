import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Disclaimer from '../components/Disclaimer';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import Home from '../pages/Home';

import { theme } from '../assets/styles/theme/default';
import { GlobalStyles } from '../assets/styles/GlobalStyles';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Disclaimer />
        <Header />
        <SubHeader />
        <Home />
      </ThemeProvider>
    </BrowserRouter>
  );
}
