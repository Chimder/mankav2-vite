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
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: 3000,
  },

  build: {
    outDir: 'dist',
    target: 'esnext',
    cssMinify: true,
    cssCodeSplit: true,
    modulePreload: {
      polyfill: true,
    },
    rollupOptions: {
      // output: {
      //   manualChunks: {
      //     'vendor-react': ['react', 'react-dom', 'react-router-dom'],
      //     'vendor-radix': [
      //       '@radix-ui/react-accordion',
      //       '@radix-ui/react-dialog',
      //       '@radix-ui/react-icons',
      //       '@radix-ui/react-select',
      //       '@radix-ui/react-separator',
      //       '@radix-ui/react-slot',
      //       '@radix-ui/themes',
      //     ],
      //     'vendor-tanstack': ['@tanstack/react-query'],
      //     'vendor-utils': ['dayjs', 'axios', 'zustand', 'immer', 'zod'],
      //   },
      // },
      // output: {
      //   manualChunks(id) {
      //     if (id.includes('/node_modules/')) {
      //       return 'vendor'
      //     }
      //     if (id.includes('pages/manga/index')) {
      //       return 'manga-main'
      //     }
      //     if (id.includes('pages/manga/search')) {
      //       return 'manga-search'
      //     }
      //     if (id.includes('pages/manga/title')) {
      //       return 'manga-title'
      //     }
      //     if (id.includes('pages/manga/chapter')) {
      //       return 'manga-chapter'
      //     }
      //     if (id.includes('pages/anime')) {
      //       return 'anime'
      //     }
      //     if (id.includes('pages/home')) {
      //       return 'home'
      //     }
      //     return null
      //   },
      // },
    },

    // assetsInlineLimit: 4096,
    // sourcemap: false,
    // chunkSizeWarningLimit: 1000,
  },

  // optimizeDeps: {
  //   include: [
  //     'react',
  //     'react-dom',
  //     'react-router-dom',
  //     '@tanstack/react-query',
  //     'axios',
  //     'dayjs',
  //     'zustand',
  //     'immer',
  //     'zod',
  //     '@radix-ui/themes',
  //   ],
  //   exclude: [],
  //   esbuildOptions: {
  //     target: 'esnext',
  //   },
  // },

  preview: {
    port: 3000,
    strictPort: true,
    open: true,
    cors: true,
  },
})
