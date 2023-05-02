import { StrictMode } from 'react';
import { QueryClientProvider } from 'react-query';
import ReactDOM from 'react-dom/client';

import { queryClient } from './lib/queryClient';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
);
