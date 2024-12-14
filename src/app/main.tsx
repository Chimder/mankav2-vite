import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '../styles/index.css'

import Providers from './providers/providers.tsx'
import Routes from './routers/routes.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <Routes />
    </Providers>
  </StrictMode>,
)
