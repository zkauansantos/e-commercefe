/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head';
import type { AppProps } from 'next/app';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

import { QueryClientProvider } from 'react-query';
import { queryClient } from '@/lib/queryClient';

import { GlobalStyles } from '@/styles/GlobalStyles';
import { theme } from '@/styles/theme/default';
import { ThemeProvider } from 'styled-components';
import 'flickity/css/flickity.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Header />
          <Component {...pageProps} />
          {/* <Footer /> */}
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}
