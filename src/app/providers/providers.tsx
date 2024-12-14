import { ReactNode } from 'react'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import TanstackProvider from './tanstack-query'
import { ThemeProvider } from './theme-provider'

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <TanstackProvider>
      <ReactQueryDevtools initialIsOpen={false} />
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {children}
      </ThemeProvider>
    </TanstackProvider>
  )
}

export default Providers
