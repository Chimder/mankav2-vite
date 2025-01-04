import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  server: {
    port: 3000,
  },

  build: {
    outDir: 'dist',
    rollupOptions: {
      // output: {
      //   manualChunks(id) {
      //     if (
      //       id.includes('node_modules/react') ||
      //       id.includes('node_modules/react-dom') ||
      //       id.includes('node_modules/react-router')
      //     ) {
      //       return 'core'
      //     }
      //     if (id.includes('node_modules')) {
      //       if (
      //         id.includes('@radix-ui') ||
      //         id.includes('lucide-react') ||
      //         id.includes('class-variance-authority')
      //       ) {
      //         return 'ui'
      //       }
      //       if (id.includes('@tanstack/react-query') || id.includes('axios')) {
      //         return 'data'
      //       }
      //       return 'vendor'
      //     }
      //     if (id.includes('/components/Layout')) {
      //       return 'layout'
      //     }
      //     if (id.includes('/components/')) {
      //       return 'components'
      //     }
      //     return null
      //   },
      //   chunkFileNames: chunkInfo => {
      //     if (
      //       chunkInfo.name === 'core' ||
      //       chunkInfo.name === 'ui' ||
      //       chunkInfo.name === 'data' ||
      //       chunkInfo.name === 'vendor' ||
      //       chunkInfo.name === 'layout' ||
      //       chunkInfo.name === 'components'
      //     ) {
      //       return 'assets/[name]-[hash].js'
      //     }
      //     return 'assets/[name].js'
      //   },
      // },
    },
    modulePreload: {
      polyfill: false,
    },
  },

  preview: {
    port: 3000,
    strictPort: true,
    open: true,
    cors: true,
  },
})
