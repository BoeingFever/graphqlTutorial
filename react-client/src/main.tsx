// src/main.tsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createClient, Provider } from 'urql';

const client = createClient({
  url: import.meta.env.VITE_API_URL || 'http://18.206.208.106/graphql',
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider value={client}>
      <App />
    </Provider>
  </React.StrictMode>
)