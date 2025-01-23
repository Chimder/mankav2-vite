import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import viteCompression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    viteCompression(),
  ],
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  build: {
    rollupOptions: {
      output: {
        chunkFileNames: `[name].[hash].js`,
      },
    },
  },

  server: {
    port: 3000,
  },

  preview: {
    port: 3000,
    strictPort: true,
    open: true,
    cors: true,
  },




  // optimizeDeps: {
  //   include: [
  //     'react',
  //     'react-dom',
  //     'react-router-dom',
  //     '@tanstack/react-query',
  //     '@tanstack/react-query-devtools',
  //     'axios',
  //     'zustand',
  //     'immer',
  //     'clsx',
  //     'classnames',
  //     'dayjs',
  //   ],
  //   exclude: ['@radix-ui/themes'],
  // },
})
